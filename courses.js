/**
 * DENTISTOIRE - Official Dental Data Store
 * Official Curriculum Structure: Oral Histology, Crown, Prosthodontics, Pharmacology, Pathology, Microbiology, Conservative Dentistry
 */

window.DENTAL_SUBJECTS = [
  {
    id: "oral-histology",
    category: "Basic Dental Science",
    icon: "microscope",
    color: "#D9A0A7",
    darkColor: "#f59e0b",
    sheetsCount: 15,
    title: { en: "Oral Histology", ar: "علم نسج الفم" },
    desc: {
      en: "Embryology, facial development, tooth morphogenesis, enamel matrix, dentinogenesis, PDL, TMJ, and oral mucosa.",
      ar: "علم التكوين الجنيني للوجه، المينا، العاج، ملاط الأسنان، اللب، والرباط السنخي."
    },
    sheets: [
      { id: "oh-s1", title: { en: "1. Embryology", ar: "1. علم الأجنة" }, topicsCount: 0 },
      {
        id: "oh-s2",
        title: { en: "2. Development of the face", ar: "2. تطور الوجه" },
        topicsCount: 16,
        quizzes: [
          {
            id: "q-ohs2-1",
            type: "mcq",
            question: {
              en: "About development of maxilla which of the following is true?",
              ar: "عن تطور الفك العلوي أي مما يلي صحيح؟"
            },
            options: [
              { en: "It has one center of ossification close to anterosuperior dental nerve", ar: "له مركز تعظم واحد بالقرب من العصب السني الأمامي العلوي" },
              { en: "It has two center of ossification at the future canine fossa", ar: "له مركزان للتعظم عند حفرة الأنياب المستقبلية" },
              { en: "None of the above", ar: "لا شيء مما سبق" },
              { en: "All of the above", ar: "كل ما سبق" }
            ],
            correct: 0,
            explanation: {
              en: "The maxilla develops from a single center of ossification close to the anterosuperior dental nerve.",
              ar: "يتطور الفك العلوي من مركز تعظم واحد بالقرب من العصب السني الأمامي العلوي."
            }
          },
          {
            id: "q-ohs2-2",
            type: "mcq",
            question: {
              en: "About age changes of mandible all of the following are true except:",
              ar: "عن التغيرات العمرية للفك السفلي جميع ما يلي صحيح ما عدا:"
            },
            options: [
              { en: "The mandible at birth differs from adult bone", ar: "يختلف الفك السفلي عند الولادة عن عظم البالغين" },
              { en: "In senility, the resorption of alveolar bone with loss of teeth causes increase of mandibular angle", ar: "في الشيخوخة، امتصاص العظم السنخي مع فقدان الأسنان يؤدي لزيادة زاوية الفك السفلي" },
              { en: "The mandibular angle at childhood is 110°", ar: "زاوية الفك السفلي في مرحلة الطفولة 110°" },
              { en: "Both A & B", ar: "كل من أ و ب" },
              { en: "None of above", ar: "لا شيء مما سبق" }
            ],
            correct: 2,
            explanation: {
              en: "The mandibular angle in childhood is obtuse (around 140°), not 110°.",
              ar: "زاوية الفك السفلي في الطفولة تكون منفرجة (حوالي 140 درجة) وليست 110 درجات."
            }
          },
          {
            id: "q-ohs2-3",
            type: "mcq",
            question: {
              en: "About development of lip which of the following is true?",
              ar: "عن تطور الشفة أي مما يلي صحيح؟"
            },
            options: [
              { en: "The lower lip develops by merging of mandibular processes", ar: "تتطور الشفة السفلى باندماج النتوءين الفكيين السفليين" },
              { en: "The upper lip is formed from two third medial nasal processes and one third maxillary processes", ar: "تتكون الشفة العليا من ثلثي النتوءات الأنفية الإنسية وثلث النتوءات الفكية العلوية" },
              { en: "Cleft lip is malformation of lower lip", ar: "انشقاق الشفة هو تشوه في الشفة السفلى" },
              { en: "All of the above", ar: "كل ما سبق" }
            ],
            correct: 0,
            explanation: {
              en: "The lower lip develops by the merging of the bilateral mandibular processes in the midline.",
              ar: "تتطور الشفة السفلى من خلال اندماج النتوءات الفكية السفلية في الخط المتوسط."
            }
          },
          {
            id: "q-ohs2-4",
            type: "mcq",
            question: {
              en: "About development of mandible which of the following is true?",
              ar: "عن تطور الفك السفلي أي مما يلي صحيح؟"
            },
            options: [
              { en: "It develops as intracartilaginous bone", ar: "يتطور كعظم داخل غضروفي" },
              { en: "Meckel's cartilage shares in ossification", ar: "يشارك غضروف ميكل في التعظم" },
              { en: "It has two ossification centers", ar: "له مركزان للتعظم" },
              { en: "Both A & B", ar: "كل من أ و ب" },
              { en: "None of the above", ar: "لا شيء مما سبق" },
              { en: "All of the above", ar: "كل ما سبق" }
            ],
            correct: 4,
            explanation: {
              en: "The mandible develops primarily intramembranously in the fibrous membrane covering Meckel's cartilage.",
              ar: "يتطور الفك السفلي بشكل رئيسي عن طريق التعظم الغشائي في الغشاء الأليفي المحيط بغضروف ميكل."
            }
          },
          {
            id: "q-ohs2-5",
            type: "mcq",
            question: {
              en: "About Meckel's cartilage which of the following are true?",
              ar: "عن غضروف ميكل (Meckel's cartilage) أي مما يلي صحيح؟"
            },
            options: [
              { en: "Shares in the ossification of the mandible", ar: "يشارك في تعظم الفك السفلي" },
              { en: "The ventral end ossifies to form malleus and incus of the inner ear", ar: "يتعظم الطرف البطني لتشكيل المطرقة والسندان في الأذن الداخلية" },
              { en: "All of the above", ar: "كل ما سبق" },
              { en: "None of the above", ar: "لا شيء مما سبق" }
            ],
            correct: 3,
            explanation: {
              en: "The dorsal (not ventral) end forms the malleus and incus; Meckel's cartilage does not directly ossify into mandibular bone.",
              ar: "الطرف الظهري (وليس البطني) يشكل المطرقة والسندان؛ وغضروف ميكل لا يتحول مباشرة إلى عظم الفك."
            }
          },
          {
            id: "q-ohs2-6",
            type: "mcq",
            question: {
              en: "Which of the following embryonic structures contribute to the formation of the upper lip?",
              ar: "أي من البنى الجنينية التالية تساهم في تشكيل الشفة العليا؟"
            },
            options: [
              { en: "Mandibular process", ar: "النتوء الفكي السفلي" },
              { en: "Maxillary processes and median nasal process", ar: "النتوءات الفكية العلوية والنتوء الأنفي المتوسط" },
              { en: "Lateral nasal processes", ar: "النتوءات الأنفية الجانبية" },
              { en: "Second pharyngeal arch", ar: "القوس البلعومي الثاني" }
            ],
            correct: 1,
            explanation: {
              en: "The upper lip is formed by the fusion of the two maxillary processes with the median nasal process.",
              ar: "تتكون الشفة العليا من اندماج النتوءين الفكيين العلويين مع النتوء الأنفي المتوسط."
            }
          },
          {
            id: "q-ohs2-7",
            type: "mcq",
            question: {
              en: "About median cleft of the mandible which of the following are true?",
              ar: "عن الانشقاق المتوسط للفك السفلي أي مما يلي صحيح؟"
            },
            options: [
              { en: "It is a common condition", ar: "حالة شائعة" },
              { en: "Failure of mesenchymal masses of zygomatic process to merge together", ar: "فشل كتل الكتلة المتوسطة للنتوء الوجني في الاندماج" },
              { en: "No bony union in the midline of mandible", ar: "غياب الاتصال العظمي في الخط المتوسط للفك السفلي" },
              { en: "Both A & B", ar: "كل من أ و ب" }
            ],
            correct: 2,
            explanation: {
              en: "Median cleft of mandible is a rare condition characterized by complete failure of bony union in the midline.",
              ar: "انشقاق الفك السفلي المتوسط هو حالة نادرة تتميز بعدم وجود التئام عظمي في المنتصف."
            }
          },
          {
            id: "q-ohs2-8",
            type: "mcq",
            question: {
              en: "About nasolacrimal duct all of the following are true except:",
              ar: "عن القناة الأنفية الدمعية جميع ما يلي صحيح ما عدا:"
            },
            options: [
              { en: "Drain excess tears from eye to nasal cavity", ar: "تصريف الدموع الزائدة من العين إلى التجويف الأنفي" },
              { en: "It lies between maxillary process and lateral nasal process", ar: "تقع بين النتوء الفكي العلوي والنتوء الأنفي الجانبي" },
              { en: "Invested by bone during ossification of the mandible", ar: "تغلف بالعظم أثناء تعظم الفك السفلي" },
              { en: "Both A & B", ar: "كل من أ و ب" }
            ],
            correct: 2,
            explanation: {
              en: "The nasolacrimal duct is unrelated to mandibular ossification.",
              ar: "القناة الأنفية الدمعية تقع في الوجه العلوي ولا تكتسي بالعظم أثناء تعظم الفك السفلي."
            }
          },
          {
            id: "q-ohs2-9",
            type: "mcq",
            question: {
              en: "About mandibular process which of the following are true?",
              ar: "عن النتوء الفكي السفلي أي مما يلي صحيح؟"
            },
            options: [
              { en: "Develop from first pharyngeal arch", ar: "يتطور من القوس البلعومي الأول" },
              { en: "Appear initially as bilateral structures but then merge with each other in midline", ar: "يظهر في البداية كتركيبين ثنائيين ثم يندمجان في الخط المتوسط" },
              { en: "Give rise to mandible, lower part of face and lower lip", ar: "يعطي الفك السفلي والجزء السفلي من الوجه والشفة السفلى" },
              { en: "Both B & C", ar: "كل من ب و ج" },
              { en: "All of above", ar: "كل ما سبق" },
              { en: "None of the above", ar: "لا شيء مما سبق" }
            ],
            correct: 4,
            explanation: {
              en: "All statements regarding first arch origin, bilateral structure merging, and derivative structures are true.",
              ar: "جميع العبارات المتعلقة بأصله من القوس الأول واندماجه وإعطائه الفك والشفة السفلى صحيحة."
            }
          },
          {
            id: "q-ohs2-10",
            type: "mcq",
            question: {
              en: "The ossification center of the developing mandible arises between:",
              ar: "يظهر مركز تعظم الفك السفلي النامي بين:"
            },
            options: [
              { en: "Mental and incisive nerves", ar: "العصب الذقني والعصب القاطعي" },
              { en: "Mandibular and maxillary nerves", ar: "العصب الفكي السفلي والعصب الفكي العلوي" },
              { en: "Superior alveolar and infra-orbital nerve", ar: "العصب السنخي العلوي والعصب تحت الحجاج" },
              { en: "None of above", ar: "لا شيء مما سبق" }
            ],
            correct: 0,
            explanation: {
              en: "The primary center of ossification for each half of the mandible appears at the bifurcation of inferior alveolar nerve into mental and incisive nerves.",
              ar: "يظهر مركز التعظم الرئيسي للفك السفلي عند تفرع العصب السنخي السفلي إلى العصبين الذقني والقاطعي."
            }
          },
          {
            id: "q-ohs2-11",
            type: "mcq",
            question: {
              en: "The face develops from:",
              ar: "يتطور الوجه من:"
            },
            options: [
              { en: "Two primordial prominences surrounding central depression", ar: "بروزين بدائيين يحيطان بانخفاض مركزي" },
              { en: "4 primordial prominences surrounding central depression", ar: "4 بروزات بدائية تحيط بانخفاض مركزي" },
              { en: "6 primordial prominences surrounding central depression", ar: "6 بروزات بدائية تحيط بانخفاض مركزي" },
              { en: "None of above", ar: "لا شيء مما سبق" }
            ],
            correct: 3,
            explanation: {
              en: "The face develops from FIVE facial primordia (1 frontonasal, 2 maxillary, and 2 mandibular prominences).",
              ar: "يتطور الوجه من 5 بروزات وجهية بدائية (1 جبهي أنفي، 2 فكي علوي، 2 فكي سفلي)."
            }
          },
          {
            id: "q-ohs2-12",
            type: "mcq",
            question: {
              en: "About median cleft lip all of the following are true except:",
              ar: "عن انشقاق الشفة المتوسط جميع ما يلي صحيح ما عدا:"
            },
            options: [
              { en: "It is a common condition", ar: "حالة شائعة" },
              { en: "Partial or complete failure of medial nasal processes to merge together", ar: "فشل جزئي أو كامل في اندماج النتوءات الأنفية الإنسية" },
              { en: "It is called hare lip", ar: "تسمى الشفة الأرنبية" },
              { en: "Both B & C", ar: "كل من ب و ج" },
              { en: "None of above", ar: "لا شيء مما سبق" }
            ],
            correct: 0,
            explanation: {
              en: "True median cleft lip (hare lip) is extremely rare, not common.",
              ar: "انشقاق الشفة المتوسط الحقيقي (الشفة الأرنبية) هو تشوه نادر جداً وليس شائعاً."
            }
          },
          {
            id: "q-ohs2-13",
            type: "mcq",
            question: {
              en: "The ossification center of the developing mandible arises between:",
              ar: "يظهر مركز تعظم الفك السفلي النامي بين:"
            },
            options: [
              { en: "Lingual nerve & chorda tympani branch", ar: "العصب اللساني وفرع حبل الطبل" },
              { en: "Mandibular nerve and Maxillary nerve", ar: "العصب الفكي السفلي والعصب الفكي العلوي" },
              { en: "Close to canine fossa", ar: "بالقرب من حفرة الأنياب" },
              { en: "None of above", ar: "لا شيء مما سبق" }
            ],
            correct: 3,
            explanation: {
              en: "The center arises specifically between mental and incisive nerves.",
              ar: "ينشأ مركز التعظم تحديداً بين العصب الذقني والعصب القاطعي."
            }
          },
          {
            id: "q-ohs2-14",
            type: "mcq",
            question: {
              en: "About Median cleft of the lip all of the following are true except:",
              ar: "عن انشقاق الشفة المتوسط جميع ما يلي صحيح ما عدا:"
            },
            options: [
              { en: "It is common", ar: "أنه شائع" },
              { en: "It is called hare lip", ar: "يسمى الشفة الأرنبية" },
              { en: "It results from failure of medial nasal processes to merge together", ar: "ينتج عن عدم اندماج النتوءات الأنفية الإنسية" },
              { en: "None of the above", ar: "لا شيء مما سبق" }
            ],
            correct: 0,
            explanation: {
              en: "Median cleft lip is a rare malformation.",
              ar: "انشقاق الشفة المتوسط هو تشوه جنيني نادر."
            }
          },
          {
            id: "q-ohs2-15",
            type: "mcq",
            question: {
              en: "About cleft lip which of the following is true?",
              ar: "عن الشفة الأرنبية (انشقاق الشفة) أي مما يلي صحيح؟"
            },
            options: [
              { en: "It is a malformation of lower lip", ar: "تشوه في الشفة السفلى" },
              { en: "Bilateral cleft lip results from failure of maxillary processes to fuse with intermaxillary segment at one side", ar: "انشقاق الشفة الثنائي يقع بسبب فشل النتوء الفكي العلوي في الاندماج في جانب واحد" },
              { en: "Both A & B", ar: "كل من أ و ب" },
              { en: "None of the above", ar: "لا شيء مما سبق" }
            ],
            correct: 3,
            explanation: {
              en: "Cleft lip affects the upper lip (not lower); bilateral cleft lip is failure of fusion on BOTH sides.",
              ar: "انشقاق الشفة يصيب الشفة العليا، والانشقاق الثنائي يحدث بسبب فشل الاندماج في الجانبين معاً."
            }
          },
          {
            id: "q-ohs2-16",
            type: "mcq",
            question: {
              en: "About Meckel's cartilage which of the following are true?",
              ar: "عن غضروف ميكل أي مما يلي صحيح؟"
            },
            options: [
              { en: "Does not share in the ossification of the mandible", ar: "لا يشارك في تعظم الفك السفلي" },
              { en: "The dorsal end ossifies to form the malleus and incus of the inner ear", ar: "يتعظم الطرف الظهري لتشكيل المطرقة والسندان في الأذن الداخلية" },
              { en: "A typical hyaline cartilage covered by fibrous tissue", ar: "غضروف زجاجي نموذجي مغطى بنسيج أليفي" },
              { en: "Both B & C", ar: "كل من ب و ج" },
              { en: "All of the above", ar: "كل ما سبق" }
            ],
            correct: 4,
            explanation: {
              en: "All statements regarding its hyaline cartilage nature, non-participation in mandibular body ossification, and dorsal end forming malleus & incus are true.",
              ar: "جميع العبارات المتعلقة بطبيعته الغضروفية الزجاجية وعدم مشاركته المباشرة وتشكيل طرفه الظهري للمطرقة والسندان صحيحة."
            }
          }
        ]
      },
      { id: "oh-s3", title: { en: "3. Development of the mouth", ar: "3. تطور الفم" }, topicsCount: 0 },
      {
        id: "oh-s4",
        title: { en: "4. Tooth development and growth", ar: "4. تطور ونمو الأسنان" },
        topicsCount: 1,
        quizzes: [
          {
            id: "q-oh-1",
            type: "mcq",
            question: {
              en: "Which cell type is responsible for producing enamel matrix during tooth development?",
              ar: "ما هو نوع الخلايا المسؤول عن إنتاج مصفوفة المينا أثناء تطور الأسنان؟"
            },
            options: [
              { en: "Odontoblasts", ar: "مُولّدات العاج (Odontoblasts)" },
              { en: "Ameloblasts", ar: "مُولّدات المينا (Ameloblasts)" },
              { en: "Cementoblasts", ar: "مُولّدات الملاط (Cementoblasts)" },
              { en: "Osteoblasts", ar: "مُولّدات العظم (Osteoblasts)" }
            ],
            correct: 1,
            explanation: {
              en: "Ameloblasts are specialized epithelial cells that secrete enamel matrix during amelogenesis.",
              ar: "الخلايا المفرزة للمينا (Ameloblasts) هي خلايا ظهارية متخصصة تفرز مصفوفة المينا."
            },
            suggestedReading: "Ten Cate's Oral Histology, Chapter 6: Tooth Morphogenesis",
            reference: "Ten Cate's Oral Histology, Ch. 6"
          }
        ]
      },
      {
        id: "oh-s5",
        title: { en: "5. Enamel", ar: "5. المينا" },
        topicsCount: 1,
        quizzes: [
          {
            id: "q-oh-2",
            type: "mcq",
            question: {
              en: "What is the primary inorganic constituent of mature human dental enamel?",
              ar: "ما المكون غير العضوي الرئيسي لمينا الأسنان البالغ؟"
            },
            options: [
              { en: "Calcium Carbonate", ar: "كربونات الكالسيوم" },
              { en: "Hydroxyapatite Crystals [Ca10(PO4)6(OH)2]", ar: "بلورات الهيدروكسي أباتيت" },
              { en: "Fluoroapatite", ar: "فلورو أباتيت" },
              { en: "Amorphous Calcium Phosphate", ar: "فوسفات الكالسيوم غير البلوري" }
            ],
            correct: 1,
            explanation: {
              en: "Enamel is 96% inorganic material by weight, primarily composed of Hydroxyapatite crystals.",
              ar: "يتكون المينا من 96% مواد غير عضوية، بشكل رئيسي بلورات الهيدروكسي أباتيت."
            },
            suggestedReading: "Orbans Oral Histology, Chapter 3: Physical Properties of Enamel",
            reference: "Orbans Oral Histology, Ch. 3"
          }
        ]
      },
      { id: "oh-s6", title: { en: "6. Dentin", ar: "6. العاج" }, topicsCount: 0 },
      { id: "oh-s7", title: { en: "7. Cementum", ar: "7. الملاط" }, topicsCount: 0 },
      { id: "oh-s8", title: { en: "8. Dental pulp", ar: "8. لب السن" }, topicsCount: 0 },
      { id: "oh-s9", title: { en: "9. Periodontal ligament (PDL)", ar: "9. الرباط السنخي السني" }, topicsCount: 0 },
      { id: "oh-s10", title: { en: "10. Alveolar bone", ar: "10. العظم السنخي" }, topicsCount: 0 },
      { id: "oh-s11", title: { en: "11. Maxillary sinus", ar: "11. الجيب الفكي العلوي" }, topicsCount: 0 },
      { id: "oh-s12", title: { en: "12. Eruption and shedding", ar: "12. البزوغ والتبديل" }, topicsCount: 0 },
      { id: "oh-s13", title: { en: "13. Temporomandibular joint (TMJ)", ar: "13. المفصل الصدغي الفكي" }, topicsCount: 0 },
      { id: "oh-s14", title: { en: "14. Oral mucosa & Gingiva", ar: "14. المخاطية الفموية واللثة" }, topicsCount: 0 },
      { id: "oh-s15", title: { en: "15. Salivary glands & Tonsils", ar: "15. الغدد اللعابية ولوزات الفم" }, topicsCount: 0 }
    ]
  },
  {
    id: "crown",
    category: "Fixed Prosthodontics",
    icon: "crown",
    color: "#ec4899",
    darkColor: "#f472b6",
    sheetsCount: 14,
    title: { en: "Crown", ar: "التيجان والجسور" },
    desc: {
      en: "Tooth preparation geometry, metal-ceramic crowns, full coverage restorations, impression techniques, dies, and casting.",
      ar: "مبادئ تحضير الأسنان، تيجان الخزف والترميمات الكاملة، طبعات الفم، نماذج الشمع والصب."
    },
    sheets: [
      {
        id: "cr-s1",
        title: { en: "1. Introduction", ar: "1. مقدمة" },
        topicsCount: 20,
        quizzes: [
          {
            id: "q-crs1-1",
            type: "mcq",
            question: {
              en: "Fixed prosthodontics is the branch of prosthodontics related to:",
              ar: "الاستعاضة السنية الثابتة هي فرع من الاستعاضة السنية يتعلق بـ:"
            },
            options: [
              { en: "Replacement of missing teeth by artificial substitutes that are removable by the patient", ar: "استبدال الأسنان المفقودة ببدائل اصطناعية يمكن للمريض إزالتها" },
              { en: "Replacement of missing teeth by artificial substitutes that are not removable from the mouth by the patient", ar: "استبدال الأسنان المفقودة ببدائل اصطناعية لا يمكن للمريض إزالتها من الفم" },
              { en: "Treatment of periodontal diseases", ar: "علاج أمراض الأنسجة الداعمة للأسنان" },
              { en: "Orthodontic correction of teeth", ar: "التقويم التأهيلي للأسنان" }
            ],
            correct: 1,
            explanation: {
              en: "Fixed prosthodontics involves restorations (crowns and bridges) that are permanently cemented and cannot be removed by the patient.",
              ar: "تعنى الاستعاضة السنية الثابتة بالترميمات (التيجان والجسور) الملتصقة دائماً والتي لا يمكن للمريض إزالتها."
            }
          },
          {
            id: "q-crs1-2",
            type: "mcq",
            question: {
              en: "A crown is defined as:",
              ar: "يُعرَّف التاج السني بأنه:"
            },
            options: [
              { en: "A removable restoration of the coronal portion of the natural tooth", ar: "ترميم متحرك للجزء التاجي من السن الطبيعي" },
              { en: "An artificial restoration of the coronal portion of the natural tooth (cemented extra-coronal restoration)", ar: "ترميم اصطناعي للجزء التاجي من السن الطبيعي (ترميم خارجي تاج ثابت ملتصق)" },
              { en: "A surgical removal of the coronal portion of the tooth", ar: "إزالة جراحية للجزء التاجي من السن" },
              { en: "A type of orthodontic appliance", ar: "نوع من أجهزة تقويم الأسنان" }
            ],
            correct: 1,
            explanation: {
              en: "A crown is an extra-coronal restoration that restores the functional and aesthetic form of the natural tooth crown.",
              ar: "التاج هو ترميم خارجي يعيد الشكل الوظيفي والجمالي للتاج الطبيعي للسن."
            }
          },
          {
            id: "q-crs1-3",
            type: "mcq",
            question: {
              en: "The portion of the tooth covered with enamel is called:",
              ar: "يُسمى الجزء من السن المغطى بالمينا بـ:"
            },
            options: [
              { en: "Clinical crown", ar: "التاج السريري" },
              { en: "Anatomical crown", ar: "التاج التشريحي" },
              { en: "Artificial crown", ar: "التاج الاصطناعي" },
              { en: "Temporary crown", ar: "التاج المؤقت" }
            ],
            correct: 1,
            explanation: {
              en: "The anatomical crown is bounded by the cementoenamel junction (CEJ) and covered entirely by enamel.",
              ar: "التاج التشريحي محدد بالملتقى المينائي الملاطي ومغطى بالكامل بطبقة المينا."
            }
          },
          {
            id: "q-crs1-4",
            type: "mcq",
            question: {
              en: "The part of the tooth that appears in the mouth (above the gum) is called:",
              ar: "الجزء من السن الذي يظهر في الفم (فوق اللثة) يُسمى:"
            },
            options: [
              { en: "Clinical crown", ar: "التاج السريري" },
              { en: "Anatomical crown", ar: "التاج التشريحي" },
              { en: "Artificial crown", ar: "التاج الاصطناعي" },
              { en: "Temporary crown", ar: "التاج المؤقت" }
            ],
            correct: 0,
            explanation: {
              en: "The clinical crown is the portion of the tooth visible in the oral cavity above the gingival margin.",
              ar: "التاج السريري هو جزء السن المرئي في التجويف الفمي فوق حافة اللثة."
            }
          },
          {
            id: "q-crs1-5",
            type: "mcq",
            question: {
              en: "A bridge is defined as:",
              ar: "يُعرَّف الجسر السني بأنه:"
            },
            options: [
              { en: "A removable prosthesis spanning a space in the dental arch", ar: "بديل متحرك يغطي الفراغ في القوس السني" },
              { en: "A non-removable prosthesis of a metallic and/or non-metallic nature, spanning a space in the dental arch and firmly anchored at one or both ends to the adjacent teeth", ar: "بديل ثابت معدني أو غير معدني يغطي الفراغ في القوس السني ومثبت بقوة في أحد الطرفين أو كلاهما الأسنان المجاورة" },
              { en: "A type of orthodontic appliance", ar: "نوع من أجهزة تقويم الأسنان" },
              { en: "A surgical implant", ar: "زرعة جراحية" }
            ],
            correct: 1,
            explanation: {
              en: "A bridge (fixed partial denture) replaces missing teeth by anchoring to abutment teeth.",
              ar: "الجسر (البديل الثابت الجزئي) يستبدل الأسنان المفقودة عبر التثبيت على الأسنان الدعامات."
            }
          },
          {
            id: "q-crs1-6",
            type: "mcq",
            question: {
              en: "The artificial tooth which replaces the missing tooth is called:",
              ar: "السن الاصطناعي الذي يحل محل السن المفقود يُسمى:"
            },
            options: [
              { en: "Pontic", ar: "الدمية (Pontic)" },
              { en: "Abutment", ar: "الدعامة (Abutment)" },
              { en: "Retainer", ar: "المثبت (Retainer)" },
              { en: "Connector", ar: "الواصل (Connector)" }
            ],
            correct: 0,
            explanation: {
              en: "The pontic is the suspended artificial tooth that replaces the missing natural tooth.",
              ar: "الدمية (Pontic) هي السن الاصطناعي المعلق الذي يحل محل السن الطبيعي المفقود."
            }
          },
          {
            id: "q-crs1-7",
            type: "mcq",
            question: {
              en: "The natural tooth or root that supports and retains the bridge at one or both ends is called:",
              ar: "السن الطبيعي أو الجذر الذي يدعم ويثبت الجسر عند طرف واحد أو كلا الطرفين يُسمى:"
            },
            options: [
              { en: "Pontic", ar: "الدمية (Pontic)" },
              { en: "Abutment", ar: "الدعامة (Abutment)" },
              { en: "Retainer", ar: "المثبت (Retainer)" },
              { en: "Connector", ar: "الواصل (Connector)" }
            ],
            correct: 1,
            explanation: {
              en: "An abutment is a tooth, portion of a tooth, or implant that serves to support and retain a prosthesis.",
              ar: "الدعامة (Abutment) هي السن أو جزء السن أو الزرعة التي تعمل على دعم وتثبيت البديل الاصطناعي."
            }
          },
          {
            id: "q-crs1-8",
            type: "mcq",
            question: {
              en: "Which of the following is a consequence of tooth removal without replacement?",
              ar: "أي مما يلي يُعد من نتائج خلع السن دون استبداله؟"
            },
            options: [
              { en: "Super eruption or extrusion of the opposing tooth or teeth", ar: "البزوغ الزائد أو تطاول السن المقابل" },
              { en: "Tilting of the adjacent teeth", ar: "ميلان الأسنان المجاورة" },
              { en: "Loss of proximal contact and food impaction", ar: "فقدان نقطة التلامس بين الأسنان وانحشار الطعام" },
              { en: "All of the above", ar: "كل ما سبق" }
            ],
            correct: 3,
            explanation: {
              en: "Unreplaced tooth loss leads to arch instability, including opposing extrusion, adjacent tipping, and proximal contact breakdown.",
              ar: "فقدان السن دون استبداله يؤدي لعدم استقرار القوس السني بما في ذلك بزوغ السن المقابل وميل الأسنان المجاورة وانحشار الطعام."
            }
          },
          {
            id: "q-crs1-9",
            type: "mcq",
            question: {
              en: "Which of the following is an option for single tooth replacement?",
              ar: "أي مما يلي يُعتبر خياراً لاستبدال سن مفرد مفقود؟"
            },
            options: [
              { en: "Implant", ar: "الزرعة السنية (Implant)" },
              { en: "Resin bonded bridge", ar: "الجسر الراتنجي اللاصق (Maryland bridge)" },
              { en: "Fixed partial denture", ar: "التركيبة الثابتة الجزئية (FPD)" },
              { en: "All of the above", ar: "كل ما سبق" }
            ],
            correct: 3,
            explanation: {
              en: "Single teeth can be restored using dental implants, resin-bonded bridges (Maryland), or conventional fixed partial dentures.",
              ar: "يمكن استبدال السن المفرد بواسطة الزرعات السنية، الجسور الراتنجية اللاصقة، أو التركيبات الثابتة التقليدية."
            }
          },
          {
            id: "q-crs1-10",
            type: "mcq",
            question: {
              en: "The aims of fixed prosthodontic treatments include:",
              ar: "تشمل أهداف علاجات الاستعاضة السنية الثابتة:"
            },
            options: [
              { en: "Restore function and mastication", ar: "استعادة الوظيفة والمضغ" },
              { en: "Restore aesthetics", ar: "استعادة المظهر الجمالي" },
              { en: "Maintain health and integrity of dental arch", ar: "الحفاظ على صحة وسلامة القوس السني" },
              { en: "All of the above", ar: "كل ما سبق" }
            ],
            correct: 3,
            explanation: {
              en: "Fixed prosthodontics aims to comprehensively restore mastication, phonetics, aesthetics, and maintain arch stability.",
              ar: "تهدف الاستعاضة الثابتة إلى الشفاء الوظيفي والجمالي والحفاظ على القوس السني."
            }
          },
          {
            id: "q-crs1-11",
            type: "mcq",
            question: {
              en: "An inlay is defined as:",
              ar: "تُعرَّف الحشوة المصبوبة الداخلية (Inlay) بأنها:"
            },
            options: [
              { en: "A restoration that covers a portion of occlusal and proximal surface but doesn't cover the cusps", ar: "ترميم يغطي جزءاً من السطح الإطباقي والملاصق ولكن لا يغطي الحدبات" },
              { en: "A restoration that covers all cusps", ar: "ترميم يغطي جميع الحدبات" },
              { en: "A removable prosthesis", ar: "تركيبة متحركة" },
              { en: "A type of crown", ar: "نوع من التاج" }
            ],
            correct: 0,
            explanation: {
              en: "An inlay is an intra-coronal restoration prepared within tooth contours without capping any cusps.",
              ar: "الحشوة المصبوبة الداخلية (Inlay) هي ترميم داخل التاج يحضر داخل حدود السن دون تغطية الحدبات."
            }
          },
          {
            id: "q-crs1-12",
            type: "mcq",
            question: {
              en: "An onlay is used for:",
              ar: "تُستخدم الحشوة المصبوبة الخارجية (Onlay) لـ:"
            },
            options: [
              { en: "Restoring more extensively damaged posterior teeth needing wide mesio-occluso-distal restorations (MOD) with cusp overlays on the occlusal surface", ar: "ترميم الأسنان الخلفية المتضررة بشدة التي تحتاج حفرة واسعة وتغطية للحدبات الإطباقية" },
              { en: "Restoring anterior teeth only", ar: "ترميم الأسنان الأمامية فقط" },
              { en: "Replacing missing teeth", ar: "استبدال الأسنان المفقودة" },
              { en: "Treating periodontal disease", ar: "علاج أمراض الأنسجة الداعمة" }
            ],
            correct: 0,
            explanation: {
              en: "An onlay is a partial coverage restoration that caps one or more cusps to protect weakened tooth structure.",
              ar: "الحشوة الخارجية (Onlay) هي ترميم جزئي يغطي حدبة واحدة أو أكثر لحماية بناء السن الضعيف."
            }
          },
          {
            id: "q-crs1-13",
            type: "mcq",
            question: {
              en: "Classification of crowns based on number of covered surfaces includes:",
              ar: "يشمل تصنيف التيجان بناءً على عدد السطوح المغطاة:"
            },
            options: [
              { en: "Full coverage (5 surfaces)", ar: "التغطية الكاملة (5 سطوح)" },
              { en: "Partial coverage (less than 5 surfaces)", ar: "التغطية الجزئية (أقل من 5 سطوح)" },
              { en: "Both A and B", ar: "كل من أ و ب" },
              { en: "None of the above", ar: "لا شيء مما سبق" }
            ],
            correct: 2,
            explanation: {
              en: "Crowns are categorized structurally into full coverage crowns (covering all 5 surfaces) and partial coverage crowns (e.g., 3/4 or 7/8 crowns).",
              ar: "تصنف التيجان إنشائياً إلى تيجان ذات تغطية كاملة (تغطي السطوح الخمسة) وتيجان جزئية (تغطي أقل من 5 سطوح)."
            }
          },
          {
            id: "q-crs1-14",
            type: "mcq",
            question: {
              en: "A jacket crown is defined as:",
              ar: "يُعرَّف التاج الخزفي الكامل (Jacket crown) بأنه:"
            },
            options: [
              { en: "A crown that covers and restores the whole coronal portion of a tooth and is made up of porcelain or any other non-metallic material", ar: "تاج يغطي ويعيد بناء الجزء التاجي بالكامل ومصنوع من الخزف أو مادة غير معدنية أخرى" },
              { en: "A crown made entirely of metal", ar: "تاج مصنوع بالكامل من المعدن" },
              { en: "A crown with only partial coverage", ar: "تاج ذو تغطية جزئية فقط" },
              { en: "A temporary crown", ar: "تاج مؤقت" }
            ],
            correct: 0,
            explanation: {
              en: "A jacket crown (all-ceramic/all-porcelain crown) covers the entire coronal surface using non-metallic aesthetic materials.",
              ar: "التاج الخزفي (Jacket crown) يغطي كامل التاج بمادة غير معدنية وجمالية."
            }
          },
          {
            id: "q-crs1-15",
            type: "mcq",
            question: {
              en: "A post crown is defined as:",
              ar: "يُعرَّف التاج الوتدي (Post crown) بأنه:"
            },
            options: [
              { en: "A jacket crown constructed on metal or non-metal core, retained by a post inserted into a prepared root canal", ar: "تاج مبني على قلب معدني أو غير معدني ومثبت بواسطة وتد يدخل في القناة الجذرية المحضرة" },
              { en: "A crown with only partial coverage", ar: "تاج ذو تغطية جزئية فقط" },
              { en: "A temporary crown", ar: "تاج مؤقت" },
              { en: "A crown made entirely of composite", ar: "تاج مصنوع بالكامل من الكومبوزيت" }
            ],
            correct: 0,
            explanation: {
              en: "Post crowns utilize an intra-radicular post anchored in the root canal to provide retention for the coronal restoration in endodontically treated teeth.",
              ar: "التاج الوتدي يستخدم وتداً جذرياً داخل القناة يوفر التثبيت للترميم التاجي في الأسنان المعالجة لبياً."
            }
          },
          {
            id: "q-crs1-16",
            type: "mcq",
            question: {
              en: "A fixed-fixed bridge is defined as:",
              ar: "يُعرَّف الجسر الثابت-الثابت (Fixed-fixed bridge) بأنه:"
            },
            options: [
              { en: "A bridge in which the pontic is joined at both ends to the retainers by rigid connectors", ar: "جسر ترتبط فيه الدمية من الطرفين بالمثبتات بواسطة وصلات صلبة (Rigid connectors)" },
              { en: "A bridge in which the pontic is joined at one end to the retainer by a rigid connector, and the other end by a non-rigid connector", ar: "جسر ترتبط فيه الدمية بوصلة صلبة في طرف وبصلة غير صلبة في الطرف الآخر" },
              { en: "A bridge in which the pontic is joined to the retainer at one end only, and the other end is free or unsupported", ar: "جسر ترتبط فيه الدمية بالمثبت من طرف واحد فقط والطرف الآخر حر" },
              { en: "A bridge in which the pontic takes its support from a remote abutment by a resilient curved arm", ar: "جسر تأخذ فيه الدمية دعمها من دعامة بعيدة عبر ذراع مرن انحنائي" }
            ],
            correct: 0,
            explanation: {
              en: "In a fixed-fixed partial denture design, rigid soldered or cast connectors join the pontic to retainers on both sides.",
              ar: "في الجسر الثابت-الثابت، تربط وصلات صلبة مسبوكة أو ملحومة الدمية بالمثبتات من كلا الجانبين."
            }
          },
          {
            id: "q-crs1-17",
            type: "mcq",
            question: {
              en: "A spring cantilever bridge is defined as:",
              ar: "يُعرَّف الجسر ذو النابر (Spring cantilever bridge) بأنه:"
            },
            options: [
              { en: "A bridge in which the pontic is joined at both ends to the retainers by rigid connectors", ar: "جسر ترتبط فيه الدمية من الطرفين بالمثبتات بواسطة وصلات صلبة" },
              { en: "A bridge in which the pontic is joined at one end to the retainer by a rigid connector, and the other end by a non-rigid connector", ar: "جسر ترتبط فيه الدمية بوصلة صلبة في طرف ووصلة غير صلبة في الطرف الآخر" },
              { en: "A bridge in which the pontic is joined to the retainer at one end only, and the other end is free or unsupported", ar: "جسر ترتبط فيه الدمية بالمثبت من طرف واحد فقط والطرف الآخر حر" },
              { en: "A bridge in which the pontic takes its support from a remote abutment by a resilient curved arm (palatal spring)", ar: "جسر تأخذ فيه الدمية دعمها من دعامة بعيدة عبر ذراع مرن منحني (شريط حنكي)" }
            ],
            correct: 3,
            explanation: {
              en: "Spring cantilever bridges replace anterior teeth by connecting the pontic to a posterior abutment via a long, resilient palatal connector bar.",
              ar: "الجسور ذات النابر تبدل الأسنان الأمامية عبر وصل الدمية بدعامة خلفية بواسطة شريط حنكي مرن."
            }
          },
          {
            id: "q-crs1-18",
            type: "mcq",
            question: {
              en: "Indications for fixed partial denture include:",
              ar: "تشمل دواعي الاستعمال للتركيبة الثابتة الجزئية (FPD):"
            },
            options: [
              { en: "One or two adjacent teeth are missing in the same arch", ar: "فقدان سن أو سنين متجاورين في نفس القوس" },
              { en: "The supportive tissues are healthy", ar: "الأنسجة الداعمة صحية وسليمة" },
              { en: "Suitable abutment teeth are present", ar: "توفّر أسنان دعامات مناسبة" },
              { en: "All of the above", ar: "كل ما سبق" }
            ],
            correct: 3,
            explanation: {
              en: "Fixed partial dentures are indicated when short edentulous spans exist alongside healthy periodontal tissue and sound abutment teeth.",
              ar: "يُستطب الجسر الثابت عند فقدان مسافة قصيرة مع صحة الأنسجة الداعمة وتوافر أسنان دعامات جيدة."
            }
          },
          {
            id: "q-crs1-19",
            type: "mcq",
            question: {
              en: "Loss of a mandibular first molar not replaced with an FPD typically results in:",
              ar: "فقدان الضرس الأول السفلي دون استبداله بتركيبة ثابتة ينجم عنه عادةً:"
            },
            options: [
              { en: "Supraclusion of opposing teeth", ar: "التطاول أو البزوغ الزائد للأسنان المقابلة (Supraclusion)" },
              { en: "Infraclusion of opposing teeth", ar: "الانخفاض الإطباقي للأسنان المقابلة" },
              { en: "No change in occlusion", ar: "عدم حدوث أي تغيير في الإطباق" },
              { en: "Improved occlusion", ar: "تحسّن في الإطباق" }
            ],
            correct: 0,
            explanation: {
              en: "Loss of support causes the opposing maxillary first molar to extrude/supraclude into the vacant space.",
              ar: "فقدان الدعم تؤدي إلى تطاول وبزوغ الضرس العلوي المقابل نحو المسافة الفارغة."
            }
          },
          {
            id: "q-crs1-20",
            type: "mcq",
            question: {
              en: "Fixed prosthodontics is divided into:",
              ar: "تنقسم الاستعاضة السنية الثابتة أساساً إلى:"
            },
            options: [
              { en: "Single crown and bridge", ar: "التاج المفرد والجسر" },
              { en: "Complete and partial dentures", ar: "الطقوم الكاملة والجزئية" },
              { en: "Removable and implants", ar: "التركيبات المتحركة والزرعات" },
              { en: "Intra coronal and extra coronal", ar: "الترميمات داخل التاج وخارج التاج" }
            ],
            correct: 0,
            explanation: {
              en: "The primary clinical divisions of fixed prosthodontic restorations are single crown restorations and multi-unit bridges.",
              ar: "الأقسام السريرية الرئيسية للاستعاضة الثابتة هي التيجان المفردة والجسور متعددة الوحدات."
            }
          }
        ]
      },
      { id: "cr-s2", title: { en: "2. Instruments", ar: "2. الأدوات والأجهزة" }, topicsCount: 0 },
      { id: "cr-s3", title: { en: "3. Principles of tooth preparation", ar: "3. مبادئ تحضير الأسنان" }, topicsCount: 0 },
      { id: "cr-s4", title: { en: "4. Metal ceramic", ar: "4. الخزف المنصهر على معدن" }, topicsCount: 0 },
      { id: "cr-s5", title: { en: "5. Full coverage", ar: "5. التغطية الكاملة" }, topicsCount: 0 },
      { id: "cr-s6", title: { en: "6. Fluid control", ar: "6. السيطرة على السوائل" }, topicsCount: 0 },
      { id: "cr-s7", title: { en: "7. Impression material", ar: "7. مواد الطبعات" }, topicsCount: 0 },
      { id: "cr-s8", title: { en: "8. Working cast and die", ar: "8. المثال العملي والمقاطع" }, topicsCount: 0 },
      { id: "cr-s9", title: { en: "9. Wax pattern", ar: "9. النموذج الشمعي" }, topicsCount: 0 },
      { id: "cr-s10", title: { en: "10. Spruing & investing", ar: "10. المصبات والأكساء" }, topicsCount: 0 },
      { id: "cr-s11", title: { en: "11. Casting", ar: "11. عملية الصب" }, topicsCount: 0 },
      { id: "cr-s12", title: { en: "12. Pontic", ar: "12. الدمية الثابتة" }, topicsCount: 0 },
      { id: "cr-s13", title: { en: "13. Retainer", ar: "13. المثبت السني" }, topicsCount: 0 },
      { id: "cr-s14", title: { en: "14. Connector", ar: "14. الوصلات" }, topicsCount: 0 }
    ]
  },
  {
    id: "prosthodontics",
    category: "Restorative Dentistry",
    icon: "tooth",
    color: "#f59e0b",
    darkColor: "#fbbf24",
    sheetsCount: 20,
    title: { en: "Prosthodontics", ar: "الاستعاضة الصناعية" },
    desc: {
      en: "Anatomical landmarks, impression techniques, occlusion blocks, facebow, surveying, retainers, and RPD biomechanics.",
      ar: "المعالم التشريحية، طبعات الفم، كتل الإطباق، قوس الوجه، تخطيط الطقوم الجزئية والوصلات."
    },
    sheets: [
      { id: "pros-s1", title: { en: "1. Introduction", ar: "1. مقدمة" }, topicsCount: 0 },
      {
        id: "pros-s2",
        title: { en: "2. Anatomical landmarks", ar: "2. المعالم التشريحية" },
        topicsCount: 1,
        quizzes: [
          {
            id: "q-pros-1",
            type: "mcq",
            question: {
              en: "What anatomical landmark provides primary stress-bearing support for a maxillary complete denture?",
              ar: "ما هو المعلم التشريحي الذي يوفر الدعم الرئيسي للضغط في الطقم السفلي العلوي؟"
            },
            options: [
              { en: "Hard Palate & Residual Alveolar Ridge Slopes", ar: "الحنك الصلب ومنحدرات الحافة السنخية المتبقية" },
              { en: "Incisive Papilla", ar: "الحليمة القاطعية" },
              { en: "Rugae area", ar: "منطقة غضون الحنك" },
              { en: "Torus Palatinus", ar: "بروز الحنك" }
            ],
            correct: 0,
            explanation: {
              en: "The hard palate and posterior slopes of the residual alveolar ridge are primary stress-bearing areas.",
              ar: "الحنك الصلب والحافة السنخية المتبقية هما المنطقتان الرئيسيتان لتحمل الضغط."
            },
            suggestedReading: "Boucher's Prosthodontic Treatment for Edentulous Patients, Chapter 5",
            reference: "Boucher Prosthodontic Treatment, Ch. 5"
          }
        ]
      },
      { id: "pros-s3", title: { en: "3. Impression", ar: "3. الطبعات" }, topicsCount: 0 },
      { id: "pros-s4", title: { en: "4. Relief", ar: "4. الإغاثة والراحة" }, topicsCount: 0 },
      { id: "pros-s5", title: { en: "5. Occlusion blocks", ar: "5. كتل الإطباق" }, topicsCount: 0 },
      { id: "pros-s6", title: { en: "6. Mandibular movement", ar: "6. حركة الفك السفلي" }, topicsCount: 0 },
      { id: "pros-s7", title: { en: "7. Facebow", ar: "7. قوس الوجه" }, topicsCount: 0 },
      { id: "pros-s8", title: { en: "8. Selection of teeth", ar: "8. اختيار الأسنان" }, topicsCount: 0 },
      { id: "pros-s9", title: { en: "9. Arrangement", ar: "9. نضد الأسنان" }, topicsCount: 0 },
      { id: "pros-s10", title: { en: "10. Retention", ar: "10. التثبيت والاستقرار" }, topicsCount: 0 },
      { id: "pros-s11", title: { en: "11. Processing of complete denture", ar: "11. معالجة الطقم الكامل" }, topicsCount: 0 },
      { id: "pros-s12", title: { en: "12. Repair, relining and rebasing of complete denture", ar: "12. إصلاح وإبطان وتبديل قاعدة الطقم" }, topicsCount: 0 },
      { id: "pros-s13", title: { en: "13. Removable partial prosthodontics", ar: "13. الاستعاضة الجزئية المتحركة" }, topicsCount: 0 },
      { id: "pros-s14", title: { en: "14. RPD component Rest", ar: "14. مهاميز الاستعاضة الجزئية" }, topicsCount: 0 },
      { id: "pros-s15", title: { en: "15. Dental surveyor & surveying", ar: "15. المخطط السني والتخطيط" }, topicsCount: 0 },
      { id: "pros-s16", title: { en: "16. Direct and indirect retainer", ar: "16. المثبتات المباشرة وغير المباشرة" }, topicsCount: 0 },
      { id: "pros-s17", title: { en: "17. Major and minor connector", ar: "17. الوصلات الكبرى والصغرى" }, topicsCount: 0 },
      { id: "pros-s18", title: { en: "18. Denture base", ar: "18. قاعدة الطقم" }, topicsCount: 0 },
      { id: "pros-s19", title: { en: "19. Laboratory Procedures", ar: "19. الإجراءات المختبرية" }, topicsCount: 0 },
      { id: "pros-s20", title: { en: "20. Biomechanics of Removable Partial Denture", ar: "20. الميكانيكا الحيوية للطقوم الجزئية" }, topicsCount: 0 }
    ]
  },
  {
    id: "pharmacology",
    category: "Clinical Pharmacology",
    icon: "pills",
    color: "#a855f7",
    darkColor: "#c084fc",
    sheetsCount: 4,
    title: { en: "Pharmacology", ar: "علم الأدوية" },
    desc: {
      en: "Autonomic nervous system, local anesthetics, antimicrobial agents, and opioid analgesics in dental practice.",
      ar: "الجهاز العصبي الودائي، المخدرات المحلية، المضادات الحيوية، والمسكنات الأفيونية."
    },
    sheets: [
      { id: "ph-s1", title: { en: "1. Introduction", ar: "1. مقدمة" }, topicsCount: 0 },
      {
        id: "ph-s2",
        title: { en: "2. Autonomic nervous system", ar: "2. الجهاز العصبي الذاتي" },
        topicsCount: 1,
        quizzes: [
          {
            id: "q-pharm-1",
            type: "mcq",
            question: {
              en: "Why is Epinephrine added as a vasoconstrictor to Local Anesthetic solutions?",
              ar: "لماذا يُضاف الإبينفرين كمقبض للأوعية إلى محلول التخدير المحلي؟"
            },
            options: [
              { en: "To decrease local anesthetic toxicity and prolong duration of action", ar: "لتقليل السُمّية وتمديد مدة تأثير المخدر" },
              { en: "To increase systemic absorption rate", ar: "لزيادة معدل الامتصاص الجهازي" },
              { en: "To neutralize pH of Lidocaine", ar: "لمعادلة حموضة الليدوكائين" },
              { en: "To prevent post-operative muscle soreness", ar: "لمنع آلام العضلات بعد العملية" }
            ],
            correct: 0,
            explanation: {
              en: "Vasoconstrictors localize anesthetic at the injection site, decreasing systemic toxicity and extending anesthesia duration.",
              ar: "يساعد مقبض الأوعية على حصر المخدر في موقع الحقن وتقليل امتصاصه الجهازي وتمديد فعاليته."
            },
            suggestedReading: "Malamed Handbook of Local Anesthesia, Chapter 3",
            reference: "Malamed Local Anesthesia, Ch. 3"
          }
        ]
      },
      { id: "ph-s3", title: { en: "3. Antimicrobial agents", ar: "3. العوامل المضادة للميكروبات" }, topicsCount: 0 },
      { id: "ph-s4", title: { en: "4. Opioid analgesics", ar: "4. المسكنات الأفيونية" }, topicsCount: 0 }
    ]
  },
  {
    id: "pathology",
    category: "General Pathology",
    icon: "notes-medical",
    color: "#ef4444",
    darkColor: "#f87171",
    sheetsCount: 11,
    title: { en: "Pathology", ar: "علم الأمراض" },
    desc: {
      en: "Cell injury, inflammation, tissue repair, circulatory disorders, neoplasia, granuloma, and oral systemic manifestations.",
      ar: "أذية الخلايا، الالتهاب، ترميم الأنسجة، الأورام، والظواهر الفموية للأمراض الجهازية."
    },
    sheets: [
      { id: "pa-s1", title: { en: "1. Introduction", ar: "1. مقدمة" }, topicsCount: 0 },
      { id: "pa-s2", title: { en: "2. Adaptation", ar: "2. التكيف الخلوي" }, topicsCount: 0 },
      { id: "pa-s3", title: { en: "3. Cell injury", ar: "3. أذية الخلايا" }, topicsCount: 0 },
      { id: "pa-s4", title: { en: "4. Inflammation", ar: "4. الالتهاب" }, topicsCount: 0 },
      { id: "pa-s5", title: { en: "5. Tissue repair", ar: "5. ترميم الأنسجة" }, topicsCount: 0 },
      { id: "pa-s6", title: { en: "6. Circulatory disorders", ar: "6. اضطرابات الدوران" }, topicsCount: 0 },
      { id: "pa-s7", title: { en: "7. Neoplasia", ar: "7. التنسجات والأورام" }, topicsCount: 0 },
      { id: "pa-s8", title: { en: "8. Cardiovascular pathology", ar: "8. أمراض الجهاز الوعائي القلبي" }, topicsCount: 0 },
      { id: "pa-s9", title: { en: "9. Gastrointestinal pathology", ar: "9. أمراض الجهاز الهضمي" }, topicsCount: 0 },
      { id: "pa-s10", title: { en: "10. Granuloma", ar: "10. الورم الحبيبي" }, topicsCount: 0 },
      { id: "pa-s11", title: { en: "11. Oral manifestations of systemic disease", ar: "11. الظواهر الفموية للأمراض الجهازية" }, topicsCount: 0 }
    ]
  },
  {
    id: "microbiology",
    category: "Basic Science",
    icon: "vial",
    color: "#06b6d4",
    darkColor: "#38bdf8",
    sheetsCount: 12,
    title: { en: "Microbiology", ar: "الأحياء الدقيقة" },
    desc: {
      en: "Bacteriology, pathogenicity, antimicrobials, immunology, complement system, mycology, sterilization, and virology.",
      ar: "البكتيريا، الإمراضية، المناعة، التعقيم والتطهير، وعلم الفيروسات."
    },
    sheets: [
      { id: "mic-s1", title: { en: "1. Introduction", ar: "1. مقدمة" }, topicsCount: 0 },
      { id: "mic-s2", title: { en: "2. Bacteriology", ar: "2. علم البكتيريا" }, topicsCount: 0 },
      { id: "mic-s3", title: { en: "3. Bacterial taxonomy", ar: "3. تصنيف البكتيريا" }, topicsCount: 0 },
      {
        id: "mic-s4",
        title: { en: "4. Bacterial pathogenicity", ar: "4. الإمراضية البكتيرية" },
        topicsCount: 1,
        quizzes: [
          {
            id: "q-mic-1",
            type: "mcq",
            question: {
              en: "Which bacterium is identified as the primary etiologic agent of dental caries initiation?",
              ar: "ما هي البكتيريا المسببة الرئيسية لبدء تسوس الأسنان؟"
            },
            options: [
              { en: "Streptococcus mutans", ar: "المكورات السلسلية الطافرة (Streptococcus mutans)" },
              { en: "Lactobacillus acidophilus", ar: "عصيات اللبن الحمضية" },
              { en: "Porphyromonas gingivalis", ar: "بورفيروموناس جينجيفاليس" },
              { en: "Actinomyces viscosus", ar: "أكتينوميسيس" }
            ],
            correct: 0,
            explanation: {
              en: "Streptococcus mutans produces extracellular glucans from sucrose that adhere firmly to enamel surfaces.",
              ar: "تنتج مكورات S. mutans الجلوكان من السكروز مما يساعدها على الالتصاق بسطح المينا."
            },
            suggestedReading: "Samaranayake Essential Microbiology for Dentistry, Chapter 8",
            reference: "Samaranayake Microbiology, Ch. 8"
          }
        ]
      },
      { id: "mic-s5", title: { en: "5. Antimicrobial chemotherapy", ar: "5. العلاج الكيميائي المضاد للميكروبات" }, topicsCount: 0 },
      { id: "mic-s6", title: { en: "6. Clinically important bacteria", ar: "6. البكتيريا الهامة سريرياً" }, topicsCount: 0 },
      { id: "mic-s7", title: { en: "7. Immunology", ar: "7. علم المناعة" }, topicsCount: 0 },
      { id: "mic-s8", title: { en: "8. Complement system", ar: "8. نظام المتممة" }, topicsCount: 0 },
      { id: "mic-s9", title: { en: "9. Mycology", ar: "9. علم الفطريات" }, topicsCount: 0 },
      { id: "mic-s10", title: { en: "10. Sterilization and disinfection", ar: "10. التعقيم والتطهير" }, topicsCount: 0 },
      { id: "mic-s11", title: { en: "11. Bacterial genetics", ar: "11. وراثة البكتيريا" }, topicsCount: 0 },
      { id: "mic-s12", title: { en: "12. Virology", ar: "12. علم الفيروسات" }, topicsCount: 0 }
    ]
  },
  {
    id: "conservative-dentistry",
    category: "Operative Dentistry",
    icon: "shield-halved",
    color: "#10b981",
    darkColor: "#34d399",
    sheetsCount: 12,
    title: { en: "Conservative Dentistry", ar: "طب الأسنان التحفظي" },
    desc: {
      en: "Tooth histology, cavity preparation, amalgam, GIC, composite resin, pulp protection, matrices, and wedges.",
      ar: "نسج الأسنان، تحضير حفر الصنف الأول والثاني، الأملغم، الكومبوزيت، وحماية اللب."
    },
    sheets: [
      { id: "cons-s1", title: { en: "1. Introduction", ar: "1. مقدمة" }, topicsCount: 0 },
      { id: "cons-s2", title: { en: "2. Tooth histology", ar: "2. نسج الأسنان" }, topicsCount: 0 },
      { id: "cons-s3", title: { en: "3. Instruments", ar: "3. الأدوات السنية" }, topicsCount: 0 },
      { id: "cons-s4", title: { en: "4. Dental caries Part 1 and Part 2", ar: "4. تسوس الأسنان الجزء 1 و 2" }, topicsCount: 0 },
      { id: "cons-s5", title: { en: "5. Principles", ar: "5. مبادئ التحضير" }, topicsCount: 0 },
      { id: "cons-s6", title: { en: "6. Amalgam", ar: "6. حشوة الأملغم" }, topicsCount: 0 },
      { id: "cons-s7", title: { en: "7. Class I & II cavity preparation for amalgam restoration", ar: "7. تحضير حفر الصنف الأول والثاني للأملغم" }, topicsCount: 0 },
      { id: "cons-s8", title: { en: "8. Glass ionomer cement (GIC)", ar: "8. إسمنت زجاجي يوندوميري" }, topicsCount: 0 },
      { id: "cons-s9", title: { en: "9. Matrices and wedges", ar: "9. المساند والإسفينات" }, topicsCount: 0 },
      { id: "cons-s10", title: { en: "10. Composite resin restoration", ar: "10. ترميمات الكومبوزيت اللاصقة" }, topicsCount: 0 },
      { id: "cons-s11", title: { en: "11. Pulp protection", ar: "11. حماية لب السن" }, topicsCount: 0 },
      { id: "cons-s12", title: { en: "12. Non-carious lesions", ar: "12. الآفات غير التسوسية" }, topicsCount: 0 }
    ]
  }
];

// REGISTERED USERS LIST (Admin View)
window.DENTISTOIRE_REGISTERED_USERS = [
  { id: "usr_admin", name: "Dr. Hadeel Zadin", email: "admin@dentistoire.edu", role: "ADMIN", joined: "Aug 05, 2026", status: "Active Admin" },
  { id: "usr_1", name: "Dr. Sarah Ahmad", email: "sarah@dentistoire.edu", role: "STUDENT", joined: "Aug 05, 2026", status: "Active Student" },
  { id: "usr_2", name: "Dr. Omar Khaled", email: "omar@dentistoire.edu", role: "STUDENT", joined: "Aug 05, 2026", status: "Active Student" },
  { id: "usr_3", name: "Dr. Lina Mahmoud", email: "lina@dentistoire.edu", role: "STUDENT", joined: "Aug 05, 2026", status: "Active Student" }
];

// ZERO DEFAULT PROGRESS USER INITIALIZATION
window.DENTISTOIRE_INITIAL_USER = {
  name: "Dr. Hadeel Zadin",
  email: "hadeel@dentistoire.edu",
  role: "STUDENT",
  xp: 0,
  level: 1,
  streak: 0,
  completedSheetsCount: 0,
  completedQuizzesCount: 0,
  studyTimeMinutes: 0,
  accuracy: "0%"
};

