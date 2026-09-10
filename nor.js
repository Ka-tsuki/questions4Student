const content = {
  en: {
    title: "Find Your Best College Major",
    subtitle: "Answer the questions to discover the college that suits your interests.",
    languageButton: "العربية",
    questionWord: "Question",
    resultTitle: "The college that suits you most is:",
    restart: "Try Again",

    specialties: {
      cs: {
        name: "Computer Science / Computing",
        desc: "You enjoy technology, logical thinking, solving problems, and creating digital solutions."
      },
      engineering: {
        name: "Engineering",
        desc: "You enjoy building, designing, physics, machines, and finding practical solutions."
      },
      medicine: {
        name: "Medicine",
        desc: "You care about people’s health, science, diagnosis, and helping others."
      },
      pharmacy: {
        name: "Pharmacy",
        desc: "You are interested in biology, chemistry, medicine, laboratories, and drug development."
      },
      business: {
        name: "Business Administration / Commerce",
        desc: "You enjoy planning, managing money, business ideas, marketing, and leadership."
      },
      media: {
        name: "Media",
        desc: "You enjoy communication, storytelling, content creation, speaking, and influencing people."
      },
      languages: {
        name: "Languages / Arts",
        desc: "You enjoy languages, reading, writing, culture, translation, and communication."
      },
      design: {
        name: "Fine Arts / Design",
        desc: "You are creative and enjoy drawing, colors, visual design, and turning ideas into art."
      }
    },

    questions: [
      {
        question: "Which activity would you enjoy the most?",
        answers: [
          ["Creating an app or solving a technology problem.", "cs"],
          ["Designing a bridge, building, or machine.", "engineering"],
          ["Helping a sick person feel better.", "medicine"],
          ["Drawing or designing a beautiful poster.", "design"]
        ]
      },
      {
        question: "Which subjects are closest to your interests?",
        answers: [
          ["Chemistry and Biology.", "pharmacy"],
          ["Economics, accounting, and business.", "business"],
          ["Writing, presenting, and discussing ideas.", "media"],
          ["Languages, literature, and translation.", "languages"]
        ]
      },
      {
        question: "In a group project, what role would you choose?",
        answers: [
          ["Building the website or technical part.", "cs"],
          ["Planning the structure and solving practical problems.", "engineering"],
          ["Researching health-related information.", "medicine"],
          ["Studying the effect and safe use of medicines.", "pharmacy"]
        ]
      },
      {
        question: "What kind of future job sounds most exciting?",
        answers: [
          ["Managing a company or launching a project.", "business"],
          ["Creating videos, campaigns, or news reports.", "media"],
          ["Working in translation or communicating with different cultures.", "languages"],
          ["Creating logos, interiors, or visual artwork.", "design"]
        ]
      },
      {
        question: "When you have free time, what would you prefer to explore?",
        answers: [
          ["New applications, websites, or technology.", "cs"],
          ["How devices, cars, or buildings work.", "engineering"],
          ["The human body and how diseases are treated.", "medicine"],
          ["How medicines are made and tested.", "pharmacy"]
        ]
      },
      {
        question: "What is your strongest skill?",
        answers: [
          ["Organizing plans, money, and tasks.", "business"],
          ["Speaking confidently and sharing ideas.", "media"],
          ["Learning words and communicating in other languages.", "languages"],
          ["Imagining shapes, colors, and visual ideas.", "design"]
        ]
      },
      {
        question: "Which problem would you like to solve?",
        answers: [
          ["Making a digital service easier for people.", "cs"],
          ["Creating a safer and stronger building or machine.", "engineering"],
          ["Finding the cause of a patient’s symptoms.", "medicine"],
          ["Developing a medicine with fewer side effects.", "pharmacy"]
        ]
      },
      {
        question: "Which project would make you proud?",
        answers: [
          ["A successful business idea.", "business"],
          ["A powerful awareness campaign.", "media"],
          ["Translating a useful book or article.", "languages"],
          ["An impressive painting or product design.", "design"]
        ]
      },
      {
        question: "How do you prefer to think?",
        answers: [
          ["Logically, step by step, to reach a solution.", "cs"],
          ["Practically, by testing how things can be built.", "engineering"],
          ["Scientifically, by understanding health and biology.", "medicine"],
          ["Carefully, by studying chemical details.", "pharmacy"]
        ]
      },
      {
        question: "What matters most to you in a career?",
        answers: [
          ["Leading projects and making important decisions.", "business"],
          ["Reaching people with meaningful messages.", "media"],
          ["Connecting people from different countries and cultures.", "languages"],
          ["Expressing ideas creatively and visually.", "design"]
        ]
      },
      {
        question: "Which workplace do you imagine yourself in?",
        answers: [
          ["A technology company or software team.", "cs"],
          ["A construction site, factory, or engineering office.", "engineering"],
          ["A hospital or medical center.", "medicine"],
          ["A pharmacy or scientific laboratory.", "pharmacy"]
        ]
      },
      {
        question: "If you could make a positive impact, how would you do it?",
        answers: [
          ["Create a profitable project that helps people.", "business"],
          ["Share useful information through content.", "media"],
          ["Help people understand each other through language.", "languages"],
          ["Create designs that inspire and improve daily life.", "design"]
        ]
      }
    ]
  },

  ar: {
    title: "اكتشفي الكلية المناسبة لكِ",
    subtitle: "أجيبي عن الأسئلة لمعرفة الكلية الأقرب إلى اهتماماتك وقدراتك.",
    languageButton: "English",
    questionWord: "السؤال",
    resultTitle: "الكلية الأنسب لكِ هي:",
    restart: "إعادة الاختبار",

    specialties: {
      cs: {
        name: "حاسبات ومعلومات",
        desc: "تحبين التكنولوجيا والتفكير المنطقي وحل المشكلات وإنشاء حلول رقمية."
      },
      engineering: {
        name: "هندسة",
        desc: "تحبين البناء والتصميم والفيزياء والآلات وتحويل الأفكار إلى حلول عملية."
      },
      medicine: {
        name: "طب بشري",
        desc: "تهتمين بصحة الناس والعلوم والتشخيص ومساعدة الآخرين."
      },
      pharmacy: {
        name: "صيدلة",
        desc: "تهتمين بالأحياء والكيمياء والأدوية والمعامل وتطوير العلاج."
      },
      business: {
        name: "تجارة / إدارة أعمال",
        desc: "تحبين التخطيط وإدارة الأموال والمشاريع والتسويق والقيادة."
      },
      media: {
        name: "إعلام",
        desc: "تحبين التواصل وصناعة المحتوى والحكي والتقديم والتأثير في الناس."
      },
      languages: {
        name: "ألسن / آداب",
        desc: "تحبين اللغات والقراءة والكتابة والثقافات والترجمة والتواصل."
      },
      design: {
        name: "فنون جميلة / تصميم",
        desc: "لديكِ حس إبداعي وتحبين الرسم والألوان والتصميم وتحويل الأفكار إلى فن."
      }
    },

    questions: [
      {
        question: "أي نشاط تستمتعين به أكثر؟",
        answers: [
          ["إنشاء تطبيق أو حل مشكلة باستخدام التكنولوجيا.", "cs"],
          ["تصميم كوبري أو مبنى أو آلة.", "engineering"],
          ["مساعدة شخص مريض حتى يشعر بتحسن.", "medicine"],
          ["الرسم أو تصميم بوستر جميل.", "design"]
        ]
      },
      {
        question: "أي مواد دراسية أقرب إلى اهتماماتك؟",
        answers: [
          ["الكيمياء والأحياء.", "pharmacy"],
          ["الاقتصاد والمحاسبة وإدارة الأعمال.", "business"],
          ["الكتابة والتقديم ومناقشة الأفكار.", "media"],
          ["اللغات والأدب والترجمة.", "languages"]
        ]
      },
      {
        question: "في مشروع جماعي، ما الدور الذي تفضلين القيام به؟",
        answers: [
          ["إنشاء الموقع أو الجزء التقني.", "cs"],
          ["تخطيط شكل المشروع وحل المشكلات العملية.", "engineering"],
          ["البحث عن معلومات تتعلق بالصحة.", "medicine"],
          ["دراسة تأثير الأدوية وطريقة استخدامها بأمان.", "pharmacy"]
        ]
      },
      {
        question: "أي وظيفة مستقبلية تبدو أكثر حماسًا لكِ؟",
        answers: [
          ["إدارة شركة أو بدء مشروع خاص.", "business"],
          ["إنتاج فيديوهات أو حملات أو تقارير إخبارية.", "media"],
          ["العمل في الترجمة أو التواصل بين الثقافات.", "languages"],
          ["تصميم شعارات أو ديكورات أو أعمال فنية.", "design"]
        ]
      },
      {
        question: "عندما يكون لديكِ وقت فراغ، ماذا تحبين أن تستكشفي؟",
        answers: [
          ["التطبيقات والمواقع والتكنولوجيا الجديدة.", "cs"],
          ["طريقة عمل الأجهزة والسيارات والمباني.", "engineering"],
          ["جسم الإنسان وطريقة علاج الأمراض.", "medicine"],
          ["طريقة تصنيع الأدوية واختبارها.", "pharmacy"]
        ]
      },
      {
        question: "ما المهارة الأقوى لديكِ؟",
        answers: [
          ["تنظيم الخطط والأموال والمهام.", "business"],
          ["التحدث بثقة ومشاركة الأفكار.", "media"],
          ["تعلم الكلمات والتواصل بلغات مختلفة.", "languages"],
          ["تخيل الأشكال والألوان والأفكار البصرية.", "design"]
        ]
      },
      {
        question: "أي مشكلة تتمنين حلها؟",
        answers: [
          ["تسهيل خدمة رقمية للناس.", "cs"],
          ["إنشاء مبنى أو آلة أكثر أمانًا وقوة.", "engineering"],
          ["معرفة سبب أعراض مريض.", "medicine"],
          ["تطوير دواء بآثار جانبية أقل.", "pharmacy"]
        ]
      },
      {
        question: "أي مشروع سيجعلكِ فخورة بنفسك؟",
        answers: [
          ["فكرة مشروع ناجحة.", "business"],
          ["حملة توعية مؤثرة.", "media"],
          ["ترجمة كتاب أو مقال مفيد.", "languages"],
          ["لوحة فنية أو تصميم منتج مميز.", "design"]
        ]
      },
      {
        question: "كيف تفضلين التفكير؟",
        answers: [
          ["بشكل منطقي خطوة بخطوة للوصول إلى حل.", "cs"],
          ["بشكل عملي من خلال تجربة كيفية بناء الأشياء.", "engineering"],
          ["بشكل علمي لفهم الصحة والأحياء.", "medicine"],
          ["بدقة من خلال دراسة التفاصيل الكيميائية.", "pharmacy"]
        ]
      },
      {
        question: "ما الأكثر أهمية بالنسبة لكِ في العمل؟",
        answers: [
          ["قيادة مشاريع واتخاذ قرارات مهمة.", "business"],
          ["الوصول إلى الناس برسائل مفيدة.", "media"],
          ["ربط الناس من ثقافات وبلدان مختلفة.", "languages"],
          ["التعبير عن الأفكار بشكل إبداعي وبصري.", "design"]
        ]
      },
      {
        question: "في أي مكان عمل تتخيلين نفسك؟",
        answers: [
          ["شركة تكنولوجيا أو فريق برمجة.", "cs"],
          ["موقع إنشاءات أو مصنع أو مكتب هندسي.", "engineering"],
          ["مستشفى أو مركز طبي.", "medicine"],
          ["صيدلية أو معمل علمي.", "pharmacy"]
        ]
      },
      {
        question: "إذا أردتِ أن تتركي أثرًا إيجابيًا، كيف ستفعلين ذلك؟",
        answers: [
          ["إنشاء مشروع ناجح يساعد الناس.", "business"],
          ["نشر معلومات مفيدة من خلال المحتوى.", "media"],
          ["مساعدة الناس على فهم بعضهم عن طريق اللغة.", "languages"],
          ["إنشاء تصميمات تلهم الناس وتحسن حياتهم.", "design"]
        ]
      }
    ]
  }
};

let language = "en";
let currentQuestion = 0;
let scores = {
  cs: 0,
  engineering: 0,
  medicine: 0,
  pharmacy: 0,
  business: 0,
  media: 0,
  languages: 0,
  design: 0
};

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const languageBtn = document.getElementById("languageBtn");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const question = document.getElementById("question");
const answersContainer = document.getElementById("answers-container");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const resultTitle = document.getElementById("resultTitle");
const resultSpecialty = document.getElementById("result-specialty");
const resultDesc = document.getElementById("result-desc");
const restartBtn = document.getElementById("restartBtn");

function showQuestion() {
  const data = content[language];
  const current = data.questions[currentQuestion];

  title.textContent = data.title;
  subtitle.textContent = data.subtitle;
  languageBtn.textContent = data.languageButton;

  progressText.textContent =
    `${data.questionWord} ${currentQuestion + 1} / ${data.questions.length}`;

  progressBar.style.width =
    `${((currentQuestion + 1) / data.questions.length) * 100}%`;

  question.textContent = current.question;
  answersContainer.innerHTML = "";

  current.answers.forEach((answer) => {
    const button = document.createElement("button");

    button.className = "answer-btn";
    button.textContent = answer[0];

    button.addEventListener("click", () => {
      scores[answer[1]]++;

      if (currentQuestion < data.questions.length - 1) {
        currentQuestion++;
        showQuestion();
      } else {
        showResult();
      }
    });

    answersContainer.appendChild(button);
  });
}

function showResult() {
  const data = content[language];

  const bestSpecialty = Object.keys(scores).reduce((best, specialty) => {
    return scores[specialty] > scores[best] ? specialty : best;
  });

  quizBox.classList.add("hidden");
  resultBox.classList.remove("hidden");

  resultTitle.textContent = data.resultTitle;
  resultSpecialty.textContent = data.specialties[bestSpecialty].name;
  resultDesc.textContent = data.specialties[bestSpecialty].desc;
  restartBtn.textContent = data.restart;
}

function changeLanguage() {
  language = language === "en" ? "ar" : "en";

  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

  showQuestion();
}

function restartQuiz() {
  currentQuestion = 0;

  scores = {
    cs: 0,
    engineering: 0,
    medicine: 0,
    pharmacy: 0,
    business: 0,
    media: 0,
    languages: 0,
    design: 0
  };

  resultBox.classList.add("hidden");
  quizBox.classList.remove("hidden");

  showQuestion();
}

languageBtn.addEventListener("click", changeLanguage);
restartBtn.addEventListener("click", restartQuiz);

showQuestion();