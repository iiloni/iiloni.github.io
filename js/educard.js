function EduCard({ title, course, desc, icons }) {
    var mColor = "";
    var colorDarken = "";
    if (course.startsWith("CMSC")) {
        mColor = "orange";
        colorDarken = " text-darken-2";
    } else {
        mColor = "green";
    }

    return (React.createElement(
        'div',
        { class: "col s12 m6 l4" },
        React.createElement(
            'div',
            {
                class: "card rounded hoverable-" + mColor + " " + (colorDarken == "" ? "green-border" : "orange-darken-2-border"),
                style: { display: "flex", 'flex-direction': "column" }
            },
            React.createElement(
                'div',
                { class: "card-content" },
                React.createElement(
                    'span',
                    {
                        class: "card-title " + mColor + "-text" + colorDarken,
                        style: { 'font-size': "1.5em" }
                    },
                    React.createElement(
                        'a',
                        {
                            href: "https://planetterp.com/course/" + course,
                            style: { color: "inherit", 'text-decoration': "inherit" },
                            class: "center",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        },
                        React.createElement(
                            'strong',
                            null,
                            title
                        )
                    )
                ),
                React.createElement(
                    'p',
                    null,
                    desc
                )
            ),
            cardIcons(icons)
        )
    )
    )
}

function cardIcons(icons) {
    if (icons == null) {
        return;
    }

    var iconElems = [];
    for (var i = 0; i < icons.length; i++) {
        iconElems.push(
            React.createElement(
                'div',
                { class: "col s3" },
                React.createElement(
                    'img',
                    {
                        class: "responsive-img tooltipped",
                        'data-position': "bottom",
                        'data-tooltip': icons[i].name,
                        src: "icons/" + icons[i].src + ".png"
                    },
                    null
                )
            )
        );
    }

    return React.createElement(
        'div',
        { class: "card-action grey lighten-5 lower-rounded" },
        iconElems
    );
}

function generateCards() {
    var EduCards = [];
    for (var i = 0; i < cardData.length; i++) {
        EduCards.push(EduCard(cardData[i]))
    }

    const cardRoot = ReactDOM.createRoot(document.getElementById("card-container"));
    cardRoot.render(EduCards);
}

/**
 * Course card objects in order of decreasing relevance.
 */
const cardData = [
    {
        title: "Machine Learning",
        course: "CMSC422",
        desc: "Broad overview of existing methods for machine learning and an introduction to adaptive systems. Emphasis given to practical aspects of machine learning and data mining.",
        icons: [{ name: "Python", src: "python" }, { name: "Jupyter", src: "jupyter" }]
    },
    {
        title: "Database Design",
        course: "CMSC424",
        desc: "Students are introduced to database systems and motivates the database approach as a mechanism for modeling the real world. An in-depth coverage of the relational model, logical database design, query languages, and other database concepts including query optimization, concurrency control; transaction management, and log based crash recovery. Distributed and Web database architectures are also discussed.",
        icons: [{ name: "PostgreSQL", src: "postgresql" }, { name: "Django", src: "django" }]
    },
    {
        title: "Algorithm Design and Analysis",
        course: "CMSC451",
        desc: "Fundamental techniques for designing efficient computer algorithms, proving their correctness, and analyzing their complexity. General topics include graph algorithms, algorithm design paradigms (such as greedy algorithms, divide-and-conquer, and dynamic programming), network flows, NP-completeness, and other topics.",
        icons: [{ name: "LaTeX", src: "latex-project" }]
    },
    {
        title: "Data Science",
        course: "CMSC320",
        desc: "Broad overview of statistical data analysis, basic machine learning algorithms, large-scale data management, cloud computing, and data visualization.",
        icons: [{ name: "Python", src: "python" }, { name: "Docker", src: "docker" }, { name: "Jupyter", src: "jupyter" }]
    },
    {
        title: "Human-Computer Interaction",
        course: "CMSC434",
        desc: "Assess usability by quantitative and qualitative methods. Conduct task analyses, usability tests, expert reviews of working products by interviews, surveys, and logging. Apply design processes and guidelines to develop professional quality user interfaces. Build low-fidelity mockups and high-fidelity prototypes using contemporary tools",
        icons: [{ name: "HTML", src: "html-5" }, { name: "CSS", src: "css-3" }, { name: "JS", src: "js" }, { name: "React", src: "react" }]
    },
    {
        title: "Data Science for Psychology",
        course: "PSYC417",
        desc: "Introduction into computational research methods in the fields of Psychology and Neuroscience through a hands-on approach with simulated and real data sets. Focus on basic procedural programming in R and Python to explore statistics and probability theory from a computational perspective.",
        icons: [{ name: "R", src: "r-project" }, { name: "Python", src: "python" }]
    },
    {
        title: "Industrial-Organizational Psychology",
        course: "PSYC361",
        desc: "Survey of the field of industrial organizational psychology including: organizational entry, organizational psychology, and workplace productivity.",
        icons: null
    },
    {
        title: "Advanced Data Structures",
        course: "CMSC420",
        desc: "Description, properties, and storage allocation functions of data structures including balanced binary trees, B-Trees, hash tables, skiplists, tries, KD-Trees and Quadtrees.",
        icons: [{ name: "Java", src: "java" }, { name: "Git", src: "git" }]
    },
    {
        title: "Git, GitHub, and Project Management",
        course: "CMSC389T",
        desc: "Version control and collaboration are essential skills for developers to learn. Students will learn how to use Git for basic and advanced workflows, GitHub for team and project management, and explore tools to help them excel in a DevOps environment.",
        icons: [{ name: "Git", src: "git" }, { name: "GitHub", src: "github" }, { name: "Docker", src: "docker" }, { name: "Java", src: "java" }]
    },
    {
        title: "Counseling Psychology",
        course: "PSYC432",
        desc: "Analysis of research and intervention strategies developed and used by counseling psychologists. Historical and current trends in content and methodology.",
        icons: null
    },
    {
        title: "Research Methods",
        course: "PSYC300",
        desc: "Overview to the fundamental theoretical, conceptual, and practical issues in psychological research in both the laboratory and the field.",
        icons: [{ name: "R", src: "r-project" }]
    },
    {
        title: "Cognitive Psychology",
        course: "PSYC341",
        desc: "An introduction to the basic concepts of cognitive psychology, the scientific study of mental processes. Topics will include perception, attention, memory, reasoning, and language, with an emphasis on how findings from cognitive psychology can inform real-life thinking (e.g., memory strategies for studying, pitfalls of multitasking, and how/why our memories can fail us).",
        icons: null
    },
    {
        title: "Intro. Algorithms",
        course: "CMSC351",
        desc: "A systematic study of the complexity of elementary algorithms related to sorting, graphs and trees, and combinatorics. Analysis of algorithms through recurrences and summations.",
        icons: [{ name: "LaTeX", src: "latex-project" }]
    },
    {
        title: "Clinical Psychology",
        course: "PSYC436",
        desc: "Critical analysis of clinical psychology, with particular emphasis on current developments and trends.",
        icons: null
    },
        {
        title: "Psychology of Interpersonal Relationships",
        course: "PSYC334",
        desc: "Research, theory and their practical applications pertaining to the development, maintenance and dissolution of human relationships. Processes critical to successful relating (e.g., communication, bargaining, conflict resolution), and issues associated with troubled dyadic relations with equal partners (e.g., jealousy, spouse abuse, divorce).",
        icons: null
    },
    {
        title: "Intro. Computer Systems",
        course: "CMSC216",
        desc: "Covers concepts including: C programming, introductory systems programming, assembly language, UNIX, machine data representation, thread management, optimization, and virtual memory.",
        icons: [{ name: "C", src: "c" }, { name: "Linux", src: "linux" }]
    },
    {
        title: "Multicultural Psychology",
        course: "PSYC354",
        desc: "Review of psychological implications of racism, sexism, homophobia and other structures of inequality in the United States.",
        icons: null
    },
    {
        title: "Health Psychology",
        course: "PSYC344",
        desc: "An examination of how psychological, biological, and social factors impact physical health and well-being. Students will use the biopsychosocial model to analyze topics including stress, health disparities, pain, addiction, disease states (e.g., cardiovascular disease, diabetes, cancer), and primary prevention.",
        icons: null
    },
    {
        title: "Addiction Psychology",
        course: "PSYC437",
        desc: "Explores the current research in assessment and treatment of addictive behaviors. Topics may include addictions in the areas of alcohol, drugs, nicotine, gambling, and eating.",
        icons: null
    },
    {
        title: "Compilers",
        course: "CMSC430",
        desc: "Topics include lexical analysis, parsing, intermediate representations, program analysis, optimization, and code generation.",
        icons: [{ name: "Racket", src: "racket" }, { name: "C", src: "c" }]
    },
    {
        title: "Organization of Programming Languages",
        course: "CMSC330",
        desc: "A study of programming languages, including their syntax, semantics, and implementation - including dynamic, scripting, functional, and memory safe systems programming.",
        icons: [{ name: "Ruby", src: "ruby" }, { name: "OCaml", src: "ocaml" }]
    },
];