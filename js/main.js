// /*

// index.htmlのformタグのうち、form_bodyというname属性(name="form_body")を持った要素を取得し、contactFormという名前をつける
const contactForm = document.forms.form_body;
// contactFormに何が入っているのかを確認する
console.log(contactForm); // 開発者用ツールのコンソールを見てみよう
// formの子要素のうち、nameというname属性にプレースホルダーを設置
contactForm.name.placeholder = '例）山田 太郎'
contactForm.email.placeholder = '例）gains@sample.com'
contactForm.question.placeholder = '例）おすすめのメニューはなんですか？'


// index.htmlの中から、send-buttonといういidを持った要素を取得し、sendButtonという名前をつける
const sendButton = document.getElementById('send-button');
// sendButtonに、クリックしたときどうする？という動きを持たせる
sendButton.addEventListener('click', () => {
  // alertという機能を使って、クリックしたときに文字を出現させる
  alert(`
    お名前：${contactForm.name.value}
    メール：${contactForm.email.value}
    内容　：${contactForm.question.value}

    送信完了しました。
  `);
});


// index.htmlの中から、contact-titleというidを持った要素を取得し、contactTitleという名前をつける
const contactTitle = document.getElementById('contact-title')
// contactTitleに何が入っているのかを確認する
console.log(contactTitle); // 開発者用ツールのコンソールを見てみよう
// contactTitleに、クリックしたときどうする？という動きを持たせる
contactTitle.addEventListener('click', () => {
  // クリックされた時、contactTitleにchange-colorというクラスを付け加える
  contactTitle.classList.add('change-color')
  // 2000ミリ秒(2秒)後に、contactTitleからchange-colorというクラスを削除する
  setInterval(() => {contactTitle.classList.remove('change-color')}, 2000)
})

// */