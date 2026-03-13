import re

html_files = [r'c:\Users\affog\e11laa.github.io\index.html', r'c:\Users\affog\e11laa.github.io\commission.html']

translations = {
    "Main navigation": "メインナビゲーション",
    "Open navigation menu": "ナビゲーションメニューを開く",
    "Switch to English": "", # Skip
    "Listen to exonorm on Spotify": "Spotifyでexonormを聴く",
    "Listen to exonorm on Apple Music": "Apple Musicでexonormを聴く",
    "Listen to exonorm on streaming platforms": "各ストリーミングサービスでexonormを聴く",
    "Listen to animacy ep on Spotify": "Spotifyでanimacy epを聴く",
    "Listen to animacy ep on Apple Music": "Apple Musicでanimacy epを聴く",
    "Listen to animacy ep on streaming platforms": "各ストリーミングサービスでanimacy epを聴く",
    "Listen to utumiyqcom - another on Spotify": "Spotifyでutumiyqcom - anotherを聴く",
    "Listen to utumiyqcom - another on Apple Music": "Apple Musicでutumiyqcom - anotherを聴く",
    "Listen to utumiyqcom - another on streaming platforms": "各ストリーミングサービスでutumiyqcom - anotherを聴く",
    "Watch Florallax - abzu on YouTube": "YouTubeでFlorallax - abzuを観る",
    "Career timeline": "実績のタイムライン",
    "Show email address": "メールアドレスを表示",
    "Send an email to elli mia": "elli miaにメールを送る",
    "Social media links": "各種ソーシャルリンク",
    "Follow elli mia on X (Twitter)": "X (Twitter)でelli miaをフォロー",
    "Follow elli mia on Instagram": "Instagramでelli miaをフォロー",
    "Follow elli mia on YouTube": "YouTubeでelli miaをチャンネル登録",
    "Listen to elli mia on Spotify": "Spotifyでelli miaを聴く",
    "Listen to elli mia on SoundCloud": "SoundCloudでelli miaを聴く",
    "Send anonymous messages via Marshmallow": "マシュマロで匿名メッセージを送る"
}

def replace_aria(match):
    original_label = match.group(1)
    if original_label in translations and translations[original_label] != "":
        ja_label = translations[original_label]
        # Replace the `aria-label="X"` with `aria-label="ja_label" data-aria-en="X" data-aria-ja="ja_label"`
        return f'aria-label="{ja_label}" data-aria-en="{original_label}" data-aria-ja="{ja_label}"'
    return match.group(0)

for file in html_files:
    try:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Make sure not to duplicate data-aria attributes if already run
        if 'data-aria-en' not in content:
            new_content = re.sub(r'aria-label="([^"]+)"', replace_aria, content)
            
            with open(file, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {file}")
        else:
            print(f"File {file} already contains data-aria-en, skipping to avoid duplicates.")
    except Exception as e:
        print(f"Failed processing {file}: {e}")
