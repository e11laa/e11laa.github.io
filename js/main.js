(function(){var J='[ぁ-ヿ㐀-鿿]',B='[『「』」]',L='[A-Za-z0-9]';
var re=new RegExp('(?<=('+J+'|'+B+'|'+L+'))[ ]+(?=('+J+'|'+B+'|'+L+'))','g');
document.querySelectorAll('h1,h2,h3,.display-lg,.display-md,.display-sm').forEach(function(el){
 var w=document.createTreeWalker(el,NodeFilter.SHOW_TEXT),n;while(n=w.nextNode()){var t=n.nodeValue;
  var u=t.replace(re,function(m,a,b,off,str){var p=str.charAt(off-1),q=str.charAt(off+m.length);
   var pj=new RegExp(J).test(p),qj=new RegExp(J).test(q),pb=new RegExp(B).test(p),qb=new RegExp(B).test(q),pl=new RegExp(L).test(p),ql=new RegExp(L).test(q);
   if((pl&&ql)) return m;
   if((pj||pb)&&(ql||qb||qj)) return '';
   if(pl&&(qj||qb)) return '';
   return m;});
  if(u!==t)n.nodeValue=u;}
});})();

(function(){var D={"About": "About", "Works": "Works", "Commission": "Commission", "Contact": "Contact", "Musician·Composer·Artist": "Musician · Composer · Artist", "プロデューサー・DJ・アーティスト。VOCALOID等を用いた、緻密で深遠な電子音楽の世界を構築。": "Producer · DJ · Artist — crafting intricate electronic worlds with VOCALOIDs and beyond.", "音楽を聴く": "Explore My Music", "私について": "About", "プロフィール": "The Artist", "ellimia(エリエムアイエー)は、茨城県つくば市を拠点とする電子音楽プロデューサー・DJ・アーティスト。": "elli mia is a Japanese electronic music producer, DJ, and artist based in Tsukuba, Ibaraki. Drawing from leftfield bass, drum and bass, and experimental electronica, his music blurs the boundaries between the dance floor and the avant-garde — with VOCALOIDs as frequent creative collaborators.", "2023年リリースのEP『animacy』では、VOCALOIDプロダクションと精緻なリズムテクスチャーを融合させ、インターネットシーンが抱える歴史的な問題を提起。1stアルバム『exonorm』(2026年)は、連星系の重力に捕らわれた文明の宇宙的危機を描き、緻密なサウンドデザインと詩的な歌詞が交錯する。": "His debut full-length album <em>exonorm</em> (2026) weaves a cosmic narrative around a civilisation caught in the gravitational pull of a binary star system, featuring dense sound design and poetic lyrics across ten tracks. His earlier EP <em>animacy</em> (2023) fused Vocaloid production with intricate rhythmic textures while posing questions regarding the historical context of the internet scene.", "DJ・イベントオーガナイザーとしても活動。自身のイベント『purewire』を共催したほか、CIRCUSTOKYO・Wall&Wall・FORESTLIMIT・Barフェーダーなど日本各地のクラブで出演。ボーカルミックス・アレンジ・楽曲制作のクライアントワークも行う。": "Beyond the studio, elli mia is an active DJ and event organiser — co-founding the <em>purewire</em> event and performing at clubs across Japan, including CIRCUS TOKYO, Wall&Wall, and FORESTLIMIT. He also takes on vocal mixing, arrangement, and commissioned production work.", "ディスコグラフィー": "Discography", "代表作": "Works", "exonorm": "exonorm", "宇宙的危機に瀕した文明の神話から現代の問題を描く1stアルバム。レフトフィールドベース、ドラムンベース、ボカロプロダクションを融合させ、深遠なサウンドスケープを展開する。": "A ten-track debut album exploring a civilisation in cosmic crisis — fusing leftfield bass, drum and bass, and Vocaloid production into a dense, mythological soundworld.", "animacyep": "animacy ep", "2023年1月にリリースされた、初音ミクをフィーチャーした6曲入りEP。VOCALOIDを核にした電子音楽への独自アプローチを打ち出した初期の代表作。": "A six-track EP featuring Hatsune Miku, released January 2023 — an early statement of elli mia's distinctive approach to Vocaloid-driven electronic music.", "utumiyqcom—another": "utumiyqcom — another", "utumiyqcomとの共作作品。ellimiaがプロダクション・アレンジを担当。": "A collaboration with utumiyqcom, with elli mia contributing production and arrangement.", "Florallax-abzu": "Florallax - abzu", "viviα、Sugar88、katawareとの、オンラインイベント『ボカデュオ』での合作。社会が抱える問題とそれをうけた個人の在り方を、叙事詩的モチーフとともに描く。ellimiaがプロダクション・アレンジを担当。": "A collaboration piece for the online event 'VocaDuo' with viviα, Sugar88, and kataware. Exploring the relationship between societal issues and individual existence through epic motifs. Production and arrangement by elli mia.", "作品一覧を見る": "See portfolio / works", "これまでの実績": "Career", "経歴": "Achievements", "DJとして活動開始": "Started DJing", "2022年12月にDJとしてのキャリアをスタート。日本のネット・アンダーグラウンドシーンへの本格的な参入を果たした。": "Began performing as a DJ in December 2022, marking the start of an active presence in Japan's net underground scene.", "EPリリース(2023年1月)、DJ活動本格化&purewire始動": "EP Release, Active DJ Schedule & purewire Launch", "『animacy』EP(2023年1月)をリリース。CIRCUSTOKYO・Wall&Wall・FORESTLIMITを含む日本各地で数十のクラブイベントに出演。自身のイベント『purewire』を共同設立。": "Released the <em>animacy</em> EP (January 2023), played dozens of club events across Japan — including CIRCUS TOKYO, Wall&Wall, and FORESTLIMIT — and co-founded the <em>purewire</em> event.", "共作:utumiyqcom—another": "Collaboration: utumiyqcom — another", "utumiyqcom『another』にプロダクション・アレンジとして参加。ソロ活動を超えたコラボレーターとしての側面を広げた。": "Contributed production and arrangement to the track <em>another</em> by utumiyqcom, expanding his work as a collaborative producer beyond solo releases.", "デビューアルバム『exonorm』リリース": "Debut Album <em>exonorm</em> Released", "LostFrogProductionsよりデビューフルアルバム『exonorm』(2026年2月)をリリース。国際的な電子音楽コミュニティでも注目を集めている。": "Released his debut full-length album <em>exonorm</em> via Lost Frog Productions (February 2026), receiving attention from international electronic music communities.", "ご依頼など": "Commission", "ご依頼・共作": "Commission & Bookings", "リミックス・作編曲・DJ出演・執筆・動画編集・DTM講座など、幅広いご依頼をお受けしています。料金・条件はご相談ください。": "Open to remixes, composition, DJ bookings, writing, video editing, lessons, and more.<br>Rates and conditions vary — feel free to enquire.", "詳細・料金を見る": "See details & pricing", "コンタクト": "Get in Touch", "お問い合わせ": "Contact", "ブッキング、共作、楽曲制作の依頼、取材などのお問い合わせはお気軽にどうぞ。X・Discordはe11laaです。": "For bookings, collaborations, commissions, or press enquiries, feel free to reach out.<br>You can also find him on X and Discord as <strong>e11laa</strong>.", "メールアドレスを表示": "Show email address", "マシュマロ": "Marshmallow", "©2026ellimia.Allrightsreserved.": "© 2026 elli mia. All rights reserved.", "Portfolio|ellimia": "Portfolio | elli mia", "Portfolio": "Portfolio", "Portfolio/Works": "Portfolio / Works", "ボーカル楽曲、キャラクター企画、ゲーム、映像作品、電子音楽文脈に向けた作編曲・サウンドプロデュースを行っています。キャラクター・テーマ制作:オリジナルキャラクターや世界観、依頼テーマを読み取り、作品として再構成します。アルバム総合制作:作編曲、音像設計、ナラティブを一貫して構築します。ボーカル共作・受託制作:受託制作、共作、ボーカリスト様からのご依頼に対応します。作詞もお受けできます。": "I provide composition, arrangement, and sound production for vocal works, character projects, games, visual works, and electronic music contexts.<br>• Character and theme production: Read original characters, worlds, and request themes, then rebuild them as finished works.<br>• Album production: Build composition, sound image, and narrative as one system.<br>• Vocal collaboration and commissioned work: Support outside vocalists, co-writing, and commissioned production contexts.", "WhatIDo": "What I Do", "対応領域": "What I Do", "Songs/VocalWorks": "Songs / Vocal Works", "VTuber、アイドル、VOCALOID、Vsinger、キャラクターソングなど、声を中心にした楽曲の作編曲・サウンドプロデュース。": "Composition, arrangement, and sound production for vocal-centered works including VTubers, idols, VOCALOID, Vsingers, and character songs.", "Soundtrack/Game/Visual": "Soundtrack / Game / Visual", "キャラクター、世界観、シーン設計をもとにしたBGM・劇伴・テーマ楽曲制作。": "BGM, score, and theme music based on characters, worldbuilding, and scene design.", "Remix/Rearrangement": "Remix / Rearrangement", "原曲の魅力を読み取り、電子音楽・クラブミュージック・別ジャンルの文脈で再構築。": "Reconstruction of original songs through electronic music, club music, and alternate genre contexts while preserving their core appeal.", "Video/VisualProduction": "Video / Visual Production", "音楽作品の意図を理解したMV、告知映像、短尺映像の構成・編集・ディレクション。": "Structure, editing, and direction for music videos, announcement videos, and short-form visual pieces that understand the intent of the music.", "Lessons/Consultation": "Lessons / Consultation", "作編曲、音作り、ミックス、制作ワークフローの個別講座・添削・相談。": "Private lessons, feedback, and consultation for composition, arrangement, sound design, mixing, and production workflow.", "用途:": "Use case:", "ボーカル作品・コンセプトアルバム・ベースミュージック・物語音楽": "Vocal Works / Concept Album / Bass Music / Narrative Music", "担当:": "Role:", "作編曲・作詞・サウンドプロデュース・ボーカル処理・ミックス等": "Composition / Arrangement / Lyrics / Sound Production / Vocal Processing / Mix", "ベースミュージックを軸に、作編曲・音像設計・ボーカル処理・ナラティブを一貫して構築した1stalbum。": "A first album built consistently across composition, arrangement, sound image, vocal processing, and narrative, centered on bass music.", "聴く": "Listen", "utumiyqcom-another": "utumiyqcom - another", "ボーカル作品・ポップス・ビートプロダクション・共作": "Vocal Works / Pop / Beat Production / Collaboration", "作編曲・プロデュース": "Composition / Arrangement / Production", "トップラインの魅力を、正統派な構成のビートで素直に力強く伝えたコラボ作品。": "A collaboration that presents the topline's appeal directly and powerfully through beats with a classic song structure.", "オンラインイベント(VocaDuo)": "Online Event (VocaDuo)", "viviα,kataware,SatoDaiseiとの合作を主導。叙事的な世界観を支える作編曲・音像設計を担当した共作。": "A collaboration with viviα, kataware, and Sato Daisei, led through arrangement and sound design to support an epic world.", "VOCALOID・EP・初期ボーカル作品": "VOCALOID / EP / Early Vocal Works", "作編曲・作詞・サウンドプロデュース・ミックス等": "Composition / Arrangement / Lyrics / Sound Production / Mix", "初音ミクを用いたデビューEPとして、VOCALOID文脈での基礎力と初期からの作編曲力を示す作品。": "A debut EP using Hatsune Miku, showing early strength in composition and arrangement within a VOCALOID context.", "stargaze": "stargaze", "ボーカル楽曲/共作/共作制作": "Vocal Work / Co-writing / Collaborative Production", "作編曲(共同)": "Co-composition / Co-arrangement", "iga,Kianna両氏との初期のコラボ作。制作進行・作編曲の一部を担った。": "An early collaboration with iga and Kianna. I handled part of the production flow and co-composition/arrangement.", "頃-アノナガメ": "頃 - アノナガメ", "作編曲・作詞": "Composition / Arrangement / Lyrics", "kaza様主導の共作チーム「頃」にて、作編曲・サウンドデザインを担当。また、同氏の初の作詞をサポートした。": "In the collaborative team Koro led by kaza, I handled composition, arrangement, and sound design, and supported kaza's first lyrics.", "Character/Theme-basedCommissionWorks": "Character / Theme-based Commission Works", "キャラクターテーマ・ゲーム・映像・コミッション": "Character Theme / Game / Visual / Commission", "オリジナルキャラクターや世界観、依頼テーマを読み取り、楽曲として再構成するコミッションワーク。公開可能作品11/14件で、大半がキャラクター/世界観ベース。": "Commission work that reads original characters, worldbuilding, and request themes, then restructures them into music. 11 of 14 works are publicly shareable; most are character- or worldbuilding-based.", "Skeb": "Skeb", "キャラクター楽曲・物語音楽": "Character Music / Narrative Music", "TRPGのオリジナルキャラクター2名の関係性と物語設定をもとに、不穏さ、閉塞感、和風のニュアンスを織り込んで制作したキャラクターテーマ楽曲。": "A character theme based on the relationship and story settings of two original TRPG characters, incorporating unease, confinement, and Japanese nuances.", "補足:": "Client note:", "配信用BGM・作業用BGM・ループ楽曲": "Streaming BGM / Work BGM / Loop Music", "個人VTuber・一匹兎之夜様の世界観をもとに、朗読動画や配信で使用できる静かなループBGMとして制作したコミッション楽曲。": "A quiet looping BGM commission for readings and streams, based on the world of individual VTuber 一匹兎之夜.", "キャラクター楽曲・ドラムンベース": "Character Music / Drum and Bass", "論理・数学・推理をテーマにしたOCの設定をもとに、研究と発見の積み重ねから“Eureka”の瞬間へ至る物語を、展開・テンポ変化・音色設計で表現したコミッション楽曲。": "A commission based on an OC themed around logic, mathematics, and deduction, using development, tempo changes, and tone design to depict the path toward a Eureka moment.", "CULTP-prʌ́ʃən(ellimiaRemix)": "CULT P - prʌ́ʃən (elli mia Remix)", "公式リミックス・Dubstep": "Official Remix / Dubstep", "公式依頼リミックスとして、原曲の構造的なギャップを読み取り、魅力を強化した再構築作品。(フィジカル収録のため、公開リンクはXFDのみ。)": "An official commissioned remix that reads structural gaps in the original and rebuilds the track to strengthen its appeal.<br>(Only the XFD is publicly available because the full remix is on a physical release.)", "templime+星宮とと-uminonioi(ellimiaRemix)": "templime + 星宮とと - umino nioi (elli mia Remix)", "リミックス・FutureGarage": "Remix / Future Garage", "原曲をfuturegarage/電子音楽寄りに再解釈し、透明感と素直な聴きやすさを見せるリミックス。": "A reinterpretation of the original toward future garage and electronic music, showing transparency and direct listenability.", "urotas-虚空": "urotas - 虚空", "ミュージックビデオ": "Music Video", "音楽作品の構造や展開を読み取り、MVとしての構成・編集・ディレクションを担当した映像制作実績。": "A music video production where I handled structure, editing, and direction by reading the structure and development of the music.", "YouTube": "YouTube", "MusicVideo/PromotionVideoWorks": "Music Video / Promotion Video Works", "MV・告知映像・短尺映像": "Music Video / Promotion Video / Short-form Visual", "MV・告知映像を中心に、依頼案件として多数制作。音楽作品の意図を理解した映像設計に対応。": "Multiple commissioned videos, mainly music videos and promotion videos, built with attention to the intent of the music.", "DTM/CompositionConsultation": "DTM / Composition Consultation", "個別講座・添削・相談": "Private Lesson / Feedback / Consultation", "サークル内外で約20名に指導。中級者を中心に、作編曲、音作り、ミックス、情報収集、プロジェクト解説などを個別講座・単発相談で指導。": "Instruction for around twenty people inside and outside circles, covering composition, arrangement, sound design, mixing, research, and project walkthroughs.", "詳細": "Details", "ご依頼・ご相談": "Start a Project", "作編曲、リミックス、映像制作、講座などのご依頼は、詳細ページまたはお問い合わせからご相談ください。": "For composition, arrangement, remix, visual production, or lesson requests, please see the service details or contact me directly.", "依頼詳細・料金を見る": "See details & pricing", "←Portfolio/Works": "← Back to Portfolio / Works", "幅広いご依頼・共作をお受けしています。お問い合わせはX(旧Twitter)のDMまたはメールにてお気軽にどうぞ。以下の料金はあくまで目安です。内容・リテイクなどはご相談ください。": "Open to a wide range of commissions and collaborations. For enquiries, feel free to reach out via X DM or email. Pricing below is a guide — details and retakes are always open for discussion.", "依頼種別": "Type", "料金目安": "Price (guide)", "備考": "Notes", "リミックス": "Remix", "¥2,000〜¥6,000": "¥2,000–¥6,000", "時期・内容により変動": "Varies by content and timing", "作編曲・ボーカルミックス等": "Composition / Arrangement / Vocal Mix", "¥8,000〜目安(見込み作業時間×¥1,000)": "From ¥8,000 (Est. hours × ¥1,000)", "リテイク・詳細はご相談": "Retakes and details negotiable", "DJ出演": "DJ Booking", "¥3,000〜¥10,000(+交通費)": "¥3,000–¥10,000 + travel", "つくば市在住。VRChatやオンライン出演も可。": "Based in Tsukuba. VRChat / online also available.", "執筆・翻訳等": "Writing / Translation", "¥1/文字〜": "From ¥1/character", "受けたことが少ない旨ご了承の上でご依頼ください。リテイクはご相談。": "Limited experience — please note beforehand. Retakes negotiable.", "動画編集・デザイン等": "Video Editing / Design", "¥8,000〜": "From ¥8,000", "本業ではない旨ご了承ください。詳細はご相談。": "Not my main field — please note beforehand. Details negotiable.", "DTM・作曲講座等": "DTM / Composition Lesson", "¥1,000〜¥3,000/時": "¥1,000–¥3,000 /h", "要望があったので開始。準備の有無・内容によって変動": "Started by request. Varies by preparation and content.", "その他(イベント・共作企画等)": "Other (events, collabs, etc.)", "応相談(無償でも歓迎!)": "Negotiable (unpaid collabs welcome!)", "内容・時期によって変動。まずはお気軽にどうぞ!": "Conditions vary — feel free to reach out!", "お問い合わせへ": "Go to Contact", "(新しいタブで開く)": "(opens in a new window)", "ellimia(トップへ)": "elli mia (back to top)", "用途": "Use case", "担当": "Role", "補足": "Client note", "コピーしました": "Copied", "ボーカル楽曲、キャラクター企画、ゲーム、映像作品、電子音楽文脈に向けた作編曲・サウンドプロデュースを行っています。": "I provide composition, arrangement, and sound production for vocal works, character projects, games, visual works, and electronic music contexts.", "キャラクター・テーマ制作": "Character and theme production", "オリジナルキャラクターや世界観、依頼テーマを読み取り、作品として再構成します。": "Read original characters, worlds, and request themes, then rebuild them as finished works.", "アルバム総合制作": "Album production", "作編曲、音像設計、ナラティブを一貫して構築します。": "Build composition, sound image, and narrative as one system.", "ボーカル共作・受託制作": "Vocal collaboration and commissioned work", "受託制作、共作、ボーカリスト様からのご依頼に対応します。作詞もお受けできます。": "Support outside vocalists, co-writing, and commissioned production contexts.", "初音ミクをフィーチャーした6曲入りEP。VOCALOIDを核にした電子音楽への独自アプローチを打ち出した初期の代表作。": "A six-track EP featuring Hatsune Miku, an early statement of elli mia's distinctive approach to Vocaloid-driven electronic music."},A={"メインナビゲーション": "Main navigation", "ナビゲーションメニューを開く": "Open navigation menu", "各ストリーミングサービスでexonormを聴く": "Listen to exonorm on streaming platforms", "各ストリーミングサービスでanimacyepを聴く": "Listen to animacy ep on streaming platforms", "各ストリーミングサービスでutumiyqcom-anotherを聴く": "Listen to utumiyqcom - another on streaming platforms", "YouTubeでFlorallax-abzuを観る": "Watch Florallax - abzu on YouTube", "実績のタイムライン": "Career timeline", "メールアドレスを表示": "Show email address", "ellimiaにメールを送る": "Send an email to elli mia", "各種ソーシャルリンク": "Social media links", "X(Twitter)でellimiaをフォロー": "Follow elli mia on X (Twitter)", "Instagramでellimiaをフォロー": "Follow elli mia on Instagram", "YouTubeでellimiaをチャンネル登録": "Follow elli mia on YouTube", "Spotifyでellimiaを聴く": "Listen to elli mia on Spotify", "SoundCloudでellimiaを聴く": "Listen to elli mia on SoundCloud", "GitHubでellimiaをチェック": "Check elli mia on GitHub", "マシュマロで匿名メッセージを送る": "Send anonymous messages via Marshmallow", "exonormを配信サービスで聴く": "Listen to exonorm on streaming platforms", "utumiyqcom-anotherを配信サービスで聴く": "Listen to utumiyqcom - another on streaming platforms", "YouTubeでFlorallax-abzuを聴く": "Listen to Florallax - abzu on YouTube", "animacyepを配信サービスで聴く": "Listen to animacy ep on streaming platforms", "SoundCloudでstargazeを聴く": "Listen to stargaze on SoundCloud", "頃-アノナガメを配信サービスで聴く": "Listen to 頃 - アノナガメ on streaming platforms", "SkebでCharacter/Theme-basedCommissionWorksを見る": "See Character / Theme-based Commission Works on Skeb", "Skebでキャラクターテーマ楽曲を見る": "See this character theme commission on Skeb", "Skebで配信用BGMの依頼を見る": "See this streaming BGM commission on Skeb", "Skebでキャラクター楽曲の依頼を見る": "See this character music commission on Skeb", "ニコニコ動画でCULTP-prʌ́ʃən(ellimiaRemix)のXFDを聴く": "Listen to the XFD for CULT P - prʌ́ʃən (elli mia Remix) on Niconico", "SoundCloudでuminonioi(ellimiaRemix)を聴く": "Listen to umino nioi (elli mia Remix) on SoundCloud", "YouTubeでurotas-虚空を観る": "Watch urotas - 虚空 on YouTube", "DTM/CompositionConsultationの依頼詳細を見る": "See DTM / Composition Consultation details"};
function N(s){return s.normalize('NFKC').replace(/\s+/g,'');}
var roots=[document.querySelector('header.hd'),document.getElementById('main'),document.querySelector('footer.ft')].filter(Boolean);
var mk=[];
roots.forEach(function(r){r.querySelectorAll('*').forEach(function(el){
 if(el.closest('svg')||/^(SCRIPT|STYLE)$/.test(el.tagName))return;
 var k=N(el.textContent);if(k&&Object.prototype.hasOwnProperty.call(D,k))mk.push([el,k]);});});
mk.forEach(function(a){var el=a[0],k=a[1];
 var dup=mk.some(function(b){return b[0]!==el&&el.contains(b[0])&&b[1]===k;});
 if(!dup)el.setAttribute('data-i18n',k);});
roots.forEach(function(r){var w=document.createTreeWalker(r,NodeFilter.SHOW_TEXT),n,list=[];while(n=w.nextNode())list.push(n);
 list.forEach(function(t){if(t.parentNode.closest('[data-i18n],svg,script,style'))return;var k=N(t.nodeValue);
  if(k&&Object.prototype.hasOwnProperty.call(D,k)){var s=document.createElement('span');s.setAttribute('data-i18n',k);s.textContent=t.nodeValue;t.parentNode.replaceChild(s,t);}});
 r.querySelectorAll('[aria-label]').forEach(function(el){var k=N(el.getAttribute('aria-label'));if(Object.prototype.hasOwnProperty.call(A,k))el.setAttribute('data-i18n-aria',k);});});
window.__i18n={D:D,A:A};
})();


(function(){var K='[ぁ-ヿ㐀-鿿]',UNIT='年月日時分秒円回個番位件歳人名話曲枚本第';
function split(n){var t=n.nodeValue;if(!new RegExp(K).test(t)||!/[A-Za-z0-9]/.test(t))return;
 var re=/[A-Za-z0-9]+(?:[ .,&:\/'_+%-][A-Za-z0-9]+)*/g,frag=document.createDocumentFragment(),last=0,m,ch=false;
 while((m=re.exec(t))){var s=m.index,e=s+m[0].length,pb=t.charAt(s-1),pa=t.charAt(e),num=/^[0-9,.]+$/.test(m[0]);
  var L=pb&&new RegExp(K).test(pb)&&!(num&&UNIT.indexOf(pb)>-1),R=pa&&new RegExp(K).test(pa)&&!(num&&UNIT.indexOf(pa)>-1);
  if(!L&&!R)continue;
  frag.appendChild(document.createTextNode(t.slice(last,s)));
  var sp=document.createElement('span');sp.className='lt'+(L?' l':'')+(R?' r':'');sp.textContent=m[0];frag.appendChild(sp);last=e;ch=true;}
 if(ch){frag.appendChild(document.createTextNode(t.slice(last)));n.parentNode.replaceChild(frag,n);}}
var list=[];(function walk(n){for(var c=n.firstChild;c;c=c.nextSibling){if(c.nodeType===3)list.push(c);else if(c.nodeType===1&&c.tagName!=='SCRIPT'&&c.tagName!=='STYLE')walk(c);}})(document.body);
list.forEach(split);})();
(function(){var PAREN='()（）',OP='(（「『【〔[',CL=')）」』】〕]',PU='、。，．・：；！？!?,.:;',K=/[ぁ-ヿ㐀-鿿]/;
function isB(c){return OP.indexOf(c)>-1||CL.indexOf(c)>-1;}
function prevC(n){var s=n.previousSibling;return s?(s.textContent||'').slice(-1):'';}
function nextC(n){var s=n.nextSibling;return s?(s.textContent||'').charAt(0):'';}
function proc(n){var t=n.nodeValue;if(!K.test(t))return;var any=false;for(var i=0;i<t.length;i++)if(isB(t.charAt(i))){any=true;break;}if(!any)return;
 var frag=document.createDocumentFragment(),buf='';
 function flush(){if(buf){frag.appendChild(document.createTextNode(buf));buf='';}}
 for(var i=0;i<t.length;i++){var c=t.charAt(i);
  if(!isB(c)){buf+=c;continue;}
  var p=i>0?t.charAt(i-1):prevC(n),nx=i<t.length-1?t.charAt(i+1):nextC(n),isO=OP.indexOf(c)>-1,cls='bk';
  var isP=PAREN.indexOf(c)>-1,pIsB=p&&isB(p),nIsB=nx&&isB(nx),pS=!p||/\s/.test(p),nS=!nx||/\s/.test(nx);
  if(!isP){}else if(isO){if(!pS&&!(OP.indexOf(p)>-1)&&!(CL.indexOf(p)>-1)&&PU.indexOf(p)<0)cls+=' ml';if(!nS&&!(CL.indexOf(nx)>-1))cls+=' ir';}
  else{if(!nS&&!(CL.indexOf(nx)>-1)&&PU.indexOf(nx)<0)cls+=' mr';if(!pS&&!(OP.indexOf(p)>-1))cls+=' il';}
  if(isP)cls+=' p';flush();var sp=document.createElement('span');sp.className=cls;sp.textContent=c;frag.appendChild(sp);}
 flush();n.parentNode.replaceChild(frag,n);}
var list=[];(function walk(n){for(var c=n.firstChild;c;c=c.nextSibling){if(c.nodeType===3)list.push(c);else if(c.nodeType===1&&c.tagName!=='SCRIPT'&&c.tagName!=='STYLE')walk(c);}})(document.body);
list.forEach(proc);})();
(function(){var R=document.documentElement;R.setAttribute('data-tp','on');
var ctl=document.querySelector('.ctl'),th=document.getElementById('th');
var b=document.createElement('button');b.className='btn label';b.id='c_tp';b.type='button';b.textContent='Typesetting: provisional';ctl.insertBefore(b,th);var g=document.createElement('button');g.className='btn label';g.id='c_gap';g.type='button';g.textContent='JA-EN gap: 0em';ctl.insertBefore(g,th);var ps2=document.createElement('button');ps2.className='btn label';ps2.id='c_ps';ps2.type='button';ps2.textContent='Paren size: .85';ctl.insertBefore(ps2,th);var psv=['.85','.80','.90','.95','1'],psi=0;ps2.addEventListener('click',function(){psi=(psi+1)%psv.length;R.style.setProperty('--ps',psv[psi]);var w=ps2.querySelector('.wx');(w||ps2).textContent='Paren size: '+psv[psi];if(window.apply)window.apply();});
var pb=document.createElement('button');pb.className='btn label';pb.id='c_pf';pb.type='button';ctl.insertBefore(pb,th);
var pfv=[['zensm','Zen small, centered'],['zenup','Zen +.06em'],['arimo','Arimo (current)'],['zen','Zen'],['arimoup','Arimo +.115em'],['full','Full-width']],pfi=0;
function halfOf(c){return c==='（'?'(':c==='）'?')':c;}function fullOf(c){return c==='('||c==='（'?'（':'）';}
var ps=[].slice.call(document.querySelectorAll('.bk.p'));var po=ps.map(function(s){return s.firstChild.nodeValue;});
window.applyPF=function(){var tp=R.getAttribute('data-tp')==='on',pf=pfv[pfi][0];R.setAttribute('data-pf',pf);
 ps.forEach(function(s,i){var o=po[i];s.firstChild.nodeValue=!tp?o:(pf==='full'?fullOf(o):halfOf(o));});
 var w=pb.querySelector('.wx');(w||pb).textContent='Paren glyph: '+pfv[pfi][1];if(window.apply)window.apply();};
pb.addEventListener('click',function(){pfi=(pfi+1)%pfv.length;window.applyPF();});pb.textContent='Paren glyph: '+pfv[0][1];R.setAttribute('data-pf',pfv[0][0]);
var k=document.createElement('button');k.className='btn label';k.id='c_bk';k.type='button';k.textContent='Paren outer: .25em';ctl.insertBefore(k,th);var q=document.createElement('button');q.className='btn label';q.id='c_bi';q.type='button';q.textContent='Paren inner: .15em';ctl.insertBefore(q,th);var qv=['.15em','0em','.25em','.10em'],qi=0;q.addEventListener('click',function(){qi=(qi+1)%qv.length;R.style.setProperty('--igap',qv[qi]);var w=q.querySelector('.wx');(w||q).textContent='Paren inner: '+(qv[qi]==='0em'?'off':qv[qi]);if(window.apply)window.apply();});var kv=['.25em','0em','.15em','.35em'],ki=0;k.addEventListener('click',function(){ki=(ki+1)%kv.length;R.style.setProperty('--bgap',kv[ki]);var w=k.querySelector('.wx');(w||k).textContent='Paren outer: '+(kv[ki]==='0em'?'off':kv[ki]);if(window.apply)window.apply();});var gv=['0em','.10em','.15em','.20em'],gi=0;g.addEventListener('click',function(){gi=(gi+1)%gv.length;R.style.setProperty('--gap',gv[gi]);var w=g.querySelector('.wx');(w||g).textContent='JA-EN gap: '+gv[gi];if(window.apply)window.apply();});
var nodes=[],orig=[];(function walk(n){for(var c=n.firstChild;c;c=c.nextSibling){if(c.nodeType===3){if(/[（）]/.test(c.nodeValue)){nodes.push(c);orig.push(c.nodeValue);}}else if(c.nodeType===1&&c.tagName!=='SCRIPT'&&c.tagName!=='STYLE'&&c.id!=='c_tp'&&c.id!=='c_gap'&&c.id!=='c_bk'&&c.id!=='c_bi'&&c.id!=='c_pf'&&c.id!=='c_ps'){walk(c);}}})(document.body);
function jp(){[].forEach.call(document.querySelectorAll('.label'),function(el){if(/[぀-鿿]/.test(el.textContent))el.classList.add('jp');});}
function set(on){R.setAttribute('data-tp',on?'on':'off');nodes.forEach(function(n,i){n.nodeValue=on?orig[i].replace(/（/g,'(').replace(/）/g,')'):orig[i];});
 var w=b.querySelector('.wx');(w||b).textContent=on?'Typesetting: provisional':'Typesetting: current';if(window.applyPF)window.applyPF();else if(window.apply)window.apply();}
b.addEventListener('click',function(){set(R.getAttribute('data-tp')!=='on');});
jp();window.__tpInit=function(){set(true);};})();
var sx=1.06;
function cjk(t){return /[　-鿿＀-￯]/.test(t)}
function leaf(el){
 if(el.querySelector('.wx')||el.classList.contains('wx')||el.classList.contains('hs'))return;
 var cs=getComputedStyle(el);
 if(el.children.length>0&&(cs.display.indexOf('flex')>-1||cs.display.indexOf('grid')>-1||el.classList.contains('band-t'))){[].forEach.call(el.children,function(c){if(c.tagName!=='SCRIPT')leaf(c);});return;}
 if(!el.textContent.trim()||cjk(el.textContent))return;
 var w=document.createElement('span');w.className='wx';while(el.firstChild)w.appendChild(el.firstChild);el.appendChild(w);}
(function(){var SEL='.label,.data,.display-lg,.display-md,.display-sm,.sr-a,.band-t,.tl-y,.nm,.hs,.tp,.ttl,.pr';var done=[];
[].forEach.call(document.querySelectorAll(SEL),function(el){if(el.closest('.wx'))return;var p=el.parentElement&&el.parentElement.closest(SEL);if(p&&done.indexOf(p)>-1)return;leaf(el);done.push(el);});})();
function apply(){var all=document.querySelectorAll('.wx');[].forEach.call(all,function(w){w.style.transform='none';w.style.marginRight='0';w.style.whiteSpace='';w.style.maxWidth='';});
 [].forEach.call(all,function(w){var ow=w.offsetWidth;if(!ow)return;var host=w.closest('.page')||document.body;var hs=getComputedStyle(host);var hr=host.getBoundingClientRect();var wl=w.getBoundingClientRect().left;
  var avail=hr.right-parseFloat(hs.paddingRight)-wl;
  if(ow*sx>avail+0.5&&avail>40){w.style.whiteSpace='normal';w.style.maxWidth=(avail/sx)+'px';ow=w.offsetWidth;}
  w.style.transform='scaleX('+sx+')';w.style.marginRight=((sx-1)*ow)+'px';});}
function setText(btn,t){var w=btn.querySelector('.wx');(w||btn).textContent=t;apply();}
(function(){var R=document.documentElement;
var th=document.getElementById('th');th.addEventListener('click',function(){var n=R.getAttribute('data-theme')==='dark'?'light':'dark';R.setAttribute('data-theme',n);setText(th,'Theme: '+n);});
var mb=document.getElementById('menu'),nv=document.getElementById('nv');mb.addEventListener('click',function(){var o=nv.classList.toggle('open');mb.setAttribute('aria-expanded',o);apply();});
window.addEventListener('resize',apply);window.addEventListener('load',apply);
if(document.fonts){document.fonts.ready.then(apply);}
setTimeout(apply,0);window.__tpInit&&window.__tpInit();})();


(function(){var P=document.body.getAttribute('data-page');
document.querySelectorAll('.hd .nv a[data-go]').forEach(function(a){var g=a.getAttribute('data-go');if((P==='works'&&g==='works')||(P==='commission'&&g==='commission'))a.setAttribute('aria-current','page');});
var m=document.getElementById('mail'),r=document.getElementById('reveal');if(r)r.addEventListener('click',function(){
 var ad=['elliprod000','gmail.com'].join('@'),ae=m.querySelector('.addr');
 var a=document.createElement('a');a.href='mailto:'+ad;a.textContent=ad;a.setAttribute('aria-label','elli miaにメールを送る');ae.textContent='';ae.appendChild(a);
 m.setAttribute('data-on','true');
 if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(ad).then(function(){m.setAttribute('data-copied','true');if(window.apply)window.apply();setTimeout(function(){m.removeAttribute('data-copied');},2500);}).catch(function(){});}
 if(window.apply)window.apply();});
})();


(function(){var re=/[゠-ヿㇰ-ㇿｦ-ﾟ]+/g;
document.querySelectorAll('.body,.body-sm').forEach(function(el){
 var w=document.createTreeWalker(el,NodeFilter.SHOW_TEXT),n,list=[];while(n=w.nextNode())list.push(n);
 list.forEach(function(t){var s=t.nodeValue;re.lastIndex=0;if(!re.test(s))return;re.lastIndex=0;
  var f=document.createDocumentFragment(),last=0,m;
  while((m=re.exec(s))){if(m.index>last)f.appendChild(document.createTextNode(s.slice(last,m.index)));
   var sp=document.createElement('span');sp.className='kn';sp.textContent=m[0];f.appendChild(sp);last=m.index+m[0].length;}
  if(last<s.length)f.appendChild(document.createTextNode(s.slice(last)));t.parentNode.replaceChild(f,t);});
});
var R=document.documentElement;R.setAttribute('data-kn','new');R.setAttribute('data-tls','8');R.setAttribute('data-ks','n');if(window.apply)window.apply();
document.addEventListener('click',function(ev){var b=ev.target.closest('.kpanel button');if(!b)return;
 var k=b.dataset.k,v=b.dataset.v;R.setAttribute('data-'+k,v);
 b.parentNode.querySelectorAll('button[data-k='+k+']').forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false');});
 if(window.apply)window.apply();});
})();

(function(){var c=document.createElement('canvas').getContext('2d');
function run(){document.querySelectorAll('.sec-h h2').forEach(function(h){if(h.getAttribute('data-oa'))return;
 var w=document.createTreeWalker(h,NodeFilter.SHOW_TEXT),t=w.nextNode();if(!t||!t.nodeValue)return;
 var ch=t.nodeValue.charAt(0),cs=getComputedStyle(h);c.font=cs.fontWeight+' '+cs.fontSize+' '+cs.fontFamily;
 var ink=-c.measureText(ch).actualBoundingBoxLeft;if(!isFinite(ink))return;
 var sp=document.createElement('span');sp.className='oa';sp.textContent=ch;sp.style.fontFeatureSettings='normal';sp.style.marginLeft=(-ink)+'px';
 t.nodeValue=t.nodeValue.slice(1);t.parentNode.insertBefore(sp,t);h.setAttribute('data-oa','1');});
 if(window.apply)window.apply();}
var hs=document.querySelectorAll('.sec-h h2');
var jobs=[].map.call(hs,function(h){var cs=getComputedStyle(h);return document.fonts.load(cs.fontWeight+' '+cs.fontSize+' '+cs.fontFamily,h.textContent.charAt(0));});
window.__oa=run;Promise.all(jobs).then(run,run);
})();


(function(){
function fit(){
 var s=document.querySelector('.stair'); if(!s||!s.offsetWidth)return;
 var rows=[].slice.call(s.children), n=rows.length-1, R=0.39, MAX=144;
 var links=rows.map(function(r){return r.querySelector('.sr-a');});
 var last=rows[n], la=links[n], ll=last.firstElementChild; last.style.marginLeft='0px';
 function rw(){return la.getBoundingClientRect().left-ll.getBoundingClientRect().left+la.scrollWidth;}
 var fs0=parseFloat(getComputedStyle(la).fontSize), aw=la.scrollWidth, lab=rw()-aw;
 var avail=s.clientWidth-fs0*0.017;
 var f=Math.min(MAX,(avail-lab)/(aw/fs0+n*R));
 links.forEach(function(a){a.style.fontSize=f+'px';a.style.lineHeight=(f*0.9)+'px';});
 avail=s.clientWidth-f*0.017;
 var w=rw(), step=Math.max(f*R*0.9,(avail-w)/n);
 rows.forEach(function(r,i){r.style.marginLeft=(i*step)+'px';});
}
function reset(){document.querySelectorAll('.stair .sr-a').forEach(function(a){a.style.fontSize='';a.style.lineHeight='';});}
function run(){reset();fit();}
window.__fitStair=run;
var raf=0,lw=-1;function sched(){if(raf)return;raf=requestAnimationFrame(function(){raf=0;run();});}
if(window.ResizeObserver){var s0=document.querySelector('.stair');if(s0)new ResizeObserver(function(){var w=s0.clientWidth;if(w===lw)return;lw=w;sched();}).observe(s0);}
window.addEventListener('resize',sched); window.addEventListener('load',sched);
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(sched);
run();
})();


(function(){var I=window.__i18n;if(!I)return;
var SEL='.label,.data,.display-lg,.display-md,.display-sm,.sr-a,.band-t,.tl-y,.nm,.hs,.tp,.ttl,.pr';
var btn=document.querySelector('.ctl button[aria-label^="Switch to"]');if(!btn)return;
var cur='ja',snap=null,asnap=null,wrapped=[],R=document.documentElement;
function take(){snap=[];document.querySelectorAll('[data-i18n]').forEach(function(el){snap.push([el,el.innerHTML]);});
 asnap=[];document.querySelectorAll('[data-i18n-aria]').forEach(function(el){asnap.push([el,el.getAttribute('aria-label')]);});}
function unwrap(){wrapped.forEach(function(a){var w=a.querySelector(':scope > .wx');if(!w)return;while(w.firstChild)a.insertBefore(w.firstChild,w);a.removeChild(w);});wrapped=[];}
function oa(){document.querySelectorAll('.sec-h h2').forEach(function(h){if(cur==='en')h.removeAttribute('data-oa');else if(h.querySelector('.oa'))h.setAttribute('data-oa','1');});if(cur==='en'&&window.__oa)window.__oa();}
function set(lang){if(lang===cur)return;if(!snap)take();
 if(lang==='en'){
  snap.forEach(function(p){var en=I.D[p[0].getAttribute('data-i18n')];if(en!==undefined)p[0].innerHTML=en;});
  document.querySelectorAll('[data-i18n-aria]').forEach(function(el){var en=I.A[el.getAttribute('data-i18n-aria')];if(en)el.setAttribute('aria-label',en);});
  cur='en';R.lang='en';
  document.querySelectorAll('[data-i18n]').forEach(function(el){var a=el.closest(SEL);if(a&&!a.querySelector('.wx')&&!a.classList.contains('wx')&&window.leaf){window.leaf(a);if(a.querySelector(':scope > .wx'))wrapped.push(a);}});
  btn.setAttribute('aria-label','Switch to Japanese');window.setText?window.setText(btn,'JA'):btn.textContent='JA';
 }else{
  unwrap();snap.forEach(function(p){p[0].innerHTML=p[1];});asnap.forEach(function(p){p[0].setAttribute('aria-label',p[1]);});
  cur='ja';R.lang='ja';btn.setAttribute('aria-label','Switch to English');window.setText?window.setText(btn,'EN'):btn.textContent='EN';
 }
 oa();if(window.apply)window.apply();
 try{localStorage.setItem('ellimia_lang',lang);}catch(e){}}
btn.addEventListener('click',function(){set(cur==='en'?'ja':'en');});
function init(){var s=null;try{s=localStorage.getItem('ellimia_lang');}catch(e){}
 if(s==='en')set('en');else if(s!=='ja'){var l=(navigator.language||'ja').toLowerCase();if(l.indexOf('ja')!==0)set('en');}}
window.__setLang=set;
window.addEventListener('load',function(){(document.fonts?document.fonts.ready:Promise.resolve()).then(function(){setTimeout(init,120);});});
})();

