class ItcModal {
  #elem;
  #template =
    '<div class="itc-modal-backdrop"><div class="itc-modal-content"><div class="itc-modal-header"><div class="itc-modal-title">{{title}}</div><span class="itc-modal-btn-close" title="Закрыть">x</span></div><div class="itc-modal-body">{{content}}</div>{{footer}}</div></div>';
  #templateFooter = '<div class="itc-modal-footer">{{buttons}}</div>';
  #templateBtn =
    '<a href={{href}} type="button" class="{{class}}" data-action={{action}}>{{text}}</a>';
  #eventShowModal = new Event("show.itc.modal", { bubbles: true });
  #eventHideModal = new Event("hide.itc.modal", { bubbles: true });
  #disposed = false;

  constructor(options = []) {
    this.#elem = document.createElement("div");
    this.#elem.classList.add("itc-modal");
    let html = this.#template.replace("{{title}}", options.title || "");
    html = html.replace("{{content}}", options.content || "Я здесь");
    const buttons = (options.footerButtons || []).map((item) => {
      let btn = this.#templateBtn.replace("{{class}}", item.class);
      btn = btn.replace("{{action}}", item.action);
      btn = btn.replace("{{href}}", item.href);
      return btn.replace("{{text}}", item.text);
    });
    const footer = buttons.length
      ? this.#templateFooter.replace("{{buttons}}", buttons.join(""))
      : "";
    html = html.replace("{{footer}}", footer);
    this.#elem.innerHTML = html;
    document.body.append(this.#elem);
    this.#elem.addEventListener("click", this.#handlerCloseModal.bind(this));
  }

  #handlerCloseModal(e) {
    if (
      e.target.closest(".itc-modal-btn-close") ||
      e.target.classList.contains("itc-modal-backdrop")
    ) {
      this.hide();
    }
  }

  show() {
    if (this.#disposed) {
      return;
    }
    this.#elem.classList.add("itc-modal-show");
    this.#elem.dispatchEvent(this.#eventShowModal);
  }

  hide() {
    this.#elem.classList.remove("itc-modal-show");
    this.#elem.dispatchEvent(this.#eventHideModal);
  }

  dispose() {
    this.#elem.remove(this.#elem);
    this.#elem.removeEventListener("click", this.#handlerCloseModal);
    this.#disposed = true;
  }

  setBody(html) {
    this.#elem.querySelector(".itc-modal-body").innerHTML = html;
  }

  setTitle(text) {
    this.#elem.querySelector(".itc-modal-title").innerHTML = text;
  }
}

// Модальное окно
//Первая книга
const modal = new ItcModal({
  title: "",
  content:
    '<div class="o"></div><div class="a"><h4 class="n">The Wind-Up Bird Chronicle</h4><p class="p">In a Tokyo suburb, a young man named Toru Okada searches for his wife’s missing cat—and then for his wife as well—in a netherworld beneath the city’s placid surface. As these searches intersect, he encounters a bizarre group of allies and antagonists. Gripping, prophetic, and suffused with comedy and menace, this is one of Haruki Murakami’s most acclaimed and beloved novels.</p></div>',
  footerButtons: [
    {
      class: "btn btn-close btnA",
      text: "BUY",
      action: "close",
      href: "https://www.amazon.com/Wind-Up-Bird-Chronicle-Novel/dp/0679775439",
    },
  ],
});
// при клике по кнопке #show-modal
document.querySelector("#show-modal").addEventListener("click", () => {
  // откроем модальное окно
  modal.show();
});

//Вторая книга
//Менять только имя переменной => modalTwo, modalThree ... и т.д.
const modalTwo = new ItcModal({
  title: "",
  content:
    '<div class="o2"></div><div class="a"><h4 class="n">South of the Border, West of the Sun</h4><p class="p">Hajime has arrived at middle age with a loving family and an enviable career, yet he feels incomplete. When a childhood friend, now a beautiful woman, shows up with a secret from which she is unable to escape, the fault lines of doubt in Hajime’s quotidian existence begin to give way. Rich, mysterious, and quietly dazzling, in South of the Border, West of the Sun the simple arc of one man’s life becomes the exquisite literary terrain of Murakami’s remarkable genius.</p></div>',
  footerButtons: [
    {
      class: "btn btn-close btnA",
      text: "BUY",
      action: "close",
      href: "https://www.amazon.com/South-Border-West-Sun-Novel/dp/0679767398",
    },
  ],
});
// при клике по кнопке #show-modal
document.querySelector("#show-modalTwo").addEventListener("click", () => {
  //Здесь менять только вот это ^ на show-modalTwo, show-modalThree ... и т.д.
  // откроеться модальное окно
  modalTwo.show();
});

//Третья книга
const modalThree = new ItcModal({
  title: "",
  content:
    '<div class="o3"></div><div class="a"><h4 class="n">Kafka on the Shore</h4><p class="p">Here we meet a teenage boy, Kafka Tamura, who is on the run, and Nakata, an aging simpleton who is drawn to Kafka for reasons that he cannot fathom. As their paths converge, acclaimed author Haruki Murakami enfolds readers in a world where cats talk, fish fall from the sky, and spirits slip out of their bodies to make love or commit murder, in what is a truly remarkable journey.</p></div>',
  footerButtons: [
    {
      class: "btn btn-close btnA",
      text: "BUY",
      action: "close",
      href: "https://www.amazon.com/Kafka-Shore-Haruki-Murakami/dp/1400079276",
    },
  ],
});
// при клике по кнопке #show-modal
document.querySelector("#show-modalThree").addEventListener("click", () => {
  //Здесь менять только вот это ^ на show-modalThree, show-modalThree ... и т.д.
  // откроеться модальное окно
  modalThree.show();
});

//Четвертая книга
const modalFour = new ItcModal({
  title: "",
  content:
    '<div class="o4"></div><div class="a"><h4 class="n">Hard-Boiled Wonderland and the End of the World</h4><p class="p">Across two parallel narratives, Murakami draws readers into a mind-bending universe in which Lauren Bacall, Bob Dylan, a split-brained data processor, a deranged scientist, his shockingly undemure granddaughter, and various thugs, librarians, and subterranean monsters collide to dazzling effect. What emerges is a novel that is at once hilariously funny and a deeply serious meditation on the nature and uses of the mind.</p></div>',
  footerButtons: [
    {
      class: "btn btn-close btnA",
      text: "BUY",
      action: "close",
      href: "https://www.amazon.com/Hard-Boiled-Wonderland-End-World-International/dp/0679743464",
    },
  ],
});
// при клике по кнопке #show-modal
document.querySelector("#show-modalFour").addEventListener("click", () => {
  //Здесь менять только вот это ^ на show-modalThree, show-modalThree ... и т.д.
  // откроеться модальное окно
  modalFour.show();
});

//Пятая книга
const modalFive = new ItcModal({
  title: "",
  content:
    '<div class="o5"></div><div class="a"><h4 class="n">Norwegian Wood</h4><p class="p">When he hears her favourite Beatles song, Toru Watanabe recalls his first love Naoko, the girlfriend of his best friend Kizuki. Immediately he is transported back almost twenty years to his student days in Tokyo, adrift in a world of uneasy friendships, casual sex, passion, loss and desire - to a time when an impetuous young woman called Midori marches into his life and he has to choose between the future and the past.</p></div>',
  footerButtons: [
    {
      class: "btn btn-close btnA",
      text: "BUY",
      action: "close",
      href: "https://www.amazon.com/Norwegian-Wood-Haruki-Murakami/dp/0099554569",
    },
  ],
});
// при клике по кнопке #show-modal
document.querySelector("#show-modalFive").addEventListener("click", () => {
  //Здесь менять только вот это ^ на show-modalThree, show-modalThree ... и т.д.
  // откроеться модальное окно
  modalFive.show();
});

//Шестая книга
const modalSix = new ItcModal({
  title: "",
  content:
    '<div class="o6"></div><div class="a"><h4 class="n">A Wild Sheep Chase</h4><p class="p">An advertising executive receives a postcard from a friend and casually appropriates the image for an advertisement. What he doesn’t realize is that included in the scene is a mutant sheep with a star on its back, and in using this photo he has unwittingly captured the attention of a man who offers a menacing ultimatum: find the sheep or face dire consequences.</p></div>',
  footerButtons: [
    {
      class: "btn btn-close btnA",
      text: "BUY",
      action: "close",
      href: "https://www.amazon.com/Wild-Sheep-Chase-Novel/dp/037571894X",
    },
  ],
});
// при клике по кнопке #show-modal
document.querySelector("#show-modalSix").addEventListener("click", () => {
  //Здесь менять только вот это ^ на show-modalThree, show-modalThree ... и т.д.
  // откроеться модальное окно
  modalSix.show();
});

//Седьмая книга
const modalSeven = new ItcModal({
  title: "",
  content:
    '<div class="o7"></div><div class="a"><h4 class="n">1Q84.</h4><p class="p">She has entered, she realizes, a parallel existence, which she calls 1Q84 —“Q is for ‘question mark.’ A world that bears a question.” Meanwhile, an aspiring writer named Tengo takes on a suspect ghostwriting project. He becomes so wrapped up with the work and its unusual author that, soon, his previously placid life begins to come unraveled.</p></div>',
  footerButtons: [
    {
      class: "btn btn-close btnA",
      text: "BUY",
      action: "close",
      href: "https://www.amazon.com/1Q84-Vintage-International-Haruki-Murakami/dp/0307476464",
    },
  ],
});
// при клике по кнопке #show-modal
document.querySelector("#show-modalSeven").addEventListener("click", () => {
  //Здесь менять только вот это ^ на show-modalThree, show-modalThree ... и т.д.
  // откроеться модальное окно
  modalSeven.show();
});

//Восьмая книга
const modalEight = new ItcModal({
  title: "",
  content:
    '<div class="o8"></div><div class="a"><h4 class="n">Killing Commendatore</h4><p class="p">In Killing Commendatore, a thirty-something portrait painter in Tokyo is abandoned by his wife and finds himself holed up in the mountain home of a famous artist, Tomohiko Amada. When he discovers a previously unseen painting in the attic, he unintentionally opens a circle of mysterious circumstances. To close it, he must complete a journey that involves a mysterious ringing bell, a two-foot-high physical manifestation of an Idea, a dapper businessman who lives across the valley, a precocious thirteen-year-old girl, a Nazi assassination attempt during World War II in Vienna, a pit in the woods behind the artist’s home, and an underworld haunted by Double Metaphors. A tour de force of love and loneliness, war and art—as well as a loving homage to The Great Gatsby—Killing Commendatore is a stunning work of imagination from one of our greatest writers.</p></div>',
  footerButtons: [
    {
      class: "btn btn-close btnA",
      text: "BUY",
      action: "close",
      href: "https://www.amazon.com/Killing-Commendatore-novel-Haruki-Murakami/dp/052552004X",
    },
  ],
});
// при клике по кнопке #show-modal
document.querySelector("#show-modalEight").addEventListener("click", () => {
  //Здесь менять только вот это ^ на show-modalThree, show-modalThree ... и т.д.
  // откроеться модальное окно
  modalEight.show();
});

//Девятая книга
const modalNine = new ItcModal({
  title: "",
  content:
    '<div class="o9"></div><div class="a"><h4 class="n">Dance Dance Dance</h4><p class="p">As Murakami’s nameless protagonist searches for a mysteriously vanished girlfriend, he is plunged into a wind tunnel of sexual violence and metaphysical dread. In this propulsive novel, featuring a shabby but oracular Sheep Man, one of the most idiosyncratically brilliant writers at work today fuses together science fiction, the hardboiled thriller, and white-hot satire.</p></div>',
  footerButtons: [
    {
      class: "btn btn-close btnA",
      text: "BUY",
      action: "close",
      href: "https://www.amazon.com/Dance-Haruki-Murakami/dp/0679753796",
    },
  ],
});
// при клике по кнопке #show-modal
document.querySelector("#show-modalNine").addEventListener("click", () => {
  //Здесь менять только вот это ^ на show-modalThree, show-modalThree ... и т.д.
  // откроеться модальное окно
  modalNine.show();
});

//Десятая книга
const modalTen = new ItcModal({
  title: "",
  content:
    '<div class="o10"></div><div class="a"><h4 class="n">After Dark</h4><p class="p">Nineteen-year-old Mari is waiting out the night in an anonymous Denny’s when she meets a young man who insists he knows her older sister, thus setting her on an odyssey through the sleeping city. In the space of a single night, the lives of a diverse cast of Tokyo residents—models, prostitutes, mobsters, and musicians—collide in a world suspended between fantasy and reality. Utterly enchanting and infused with surrealism, After Dark is a thrilling account of the magical hours separating midnight from dawn.</p></div>',
  footerButtons: [
    {
      class: "btn btn-close btnA",
      text: "BUY",
      action: "close",
      href: "https://www.amazon.com/After-Vintage-International-Haruki-Murakami/dp/0307278735",
    },
  ],
});
// при клике по кнопке #show-modal
document.querySelector("#show-modalTen").addEventListener("click", () => {
  //Здесь менять только вот это ^ на show-modalThree, show-modalThree ... и т.д.
  // откроеться модальное окно
  modalTen.show();
});
