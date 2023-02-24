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
            { class: "card small course rounded hoverable-" + mColor },
            React.createElement(
                'div',
                { class: "card-content" },
                React.createElement(
                    'span',
                    {
                        class: "card-title " + mColor + "-text" + colorDarken,
                        style: {'font-size': "1.5em"}
                    },
                    React.createElement(
                        'a',
                        {
                            href: "https://planetterp.com/course/" + course,
                            style: { color: "inherit", 'text-decoration': "inherit" },
                            class: "center"
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
                ),
                cardIcons(icons)
            )
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

const cardData = [
    {
        title: "Machine Learning",
        course: "CMSC422",
        desc: "Broad overview of existing methods for machine learning and an introduction to adaptive systems. Emphasis given to practical aspects of machine learning and data mining.",
        icons: [{ name: "Python", src: "python" }, { name: "Jupyter", src: "jupyter" }]
    },
    {
        title: "Algorithm Design and Analysis",
        course: "CMSC451",
        desc: "Fundamental techniques for designing efficient computer algorithms, proving their correctness, and analyzing their complexity. General topics include graph algorithms, algorithm design paradigms (such as greedy algorithms, divide-and-conquer, and dynamic programming), network flows, NP-completeness, and other topics.",
        icons: [{ name: "LaTeX", src: "latex-project" }]
    },
    {
        title: "Human-Computer Interaction",
        course: "CMSC434",
        desc: "Assess usability by quantitative and qualitative methods. Conduct task analyses, usability tests, expert reviews of working products by interviews, surveys, and logging. Apply design processes and guidelines to develop professional quality user interfaces. Build low-fidelity mockups and high-fidelity prototypes using contemporary tools",
        icons: [{ name: "HTML", src: "html-5" }, { name: "CSS", src: "css-3" }, { name: "JS", src: "js" }, { name: "React", src: "react" }]
    },
    {
        title: "Data Science",
        course: "CMSC320",
        desc: "Broad overview of statistical data analysis, basic machine learning algorithms, large-scale data management, cloud computing, and data visualization.",
        icons: [{ name: "Python", src: "python" }, { name: "Docker", src: "docker" }, { name: "Jupyter", src: "jupyter" }]
    },
    {
        title: "Industrial-Organizational Psychology",
        course: "PSYC361",
        desc: "Survey of the field of industrial organizational psychology including: organizational entry, organizational psychology, and workplace productivity.",
        icons: null
    },
    {
        title: "Multicultural Psychology",
        course: "PSYC354",
        desc: "Review of psychological implications of racism, sexism, homophobia and other structures of inequality in the United States.",
        icons: null
    },
    {
        title: "Cognitive Psychology",
        course: "PSYC341",
        desc: "An introduction to the basic concepts of cognitive psychology, the scientific study of mental processes. Topics will include perception, attention, memory, reasoning, and language, with an emphasis on how findings from cognitive psychology can inform real-life thinking (e.g., memory strategies for studying, pitfalls of multitasking, and how/why our memories can fail us).",
        icons: null
    },
    {
        title: "Advanced Data Structures",
        course: "CMSC420",
        desc: "Description, properties, and storage allocation functions of data structures including balanced binary trees, B-Trees, hash tables, skiplists, tries, KD-Trees and Quadtrees.",
        icons: [{ name: "Java", src: "java" }, { name: "Git", src: "git" }]
    },
    {
        title: "Intro. Algorithms",
        course: "CMSC351",
        desc: "A systematic study of the complexity of elementary algorithms related to sorting, graphs and trees, and combinatorics. Analysis of algorithms through recurrences and summations.",
        icons: [{ name: "LaTeX", src: "latex-project" }]
    },
    {
        title: "Research Methods",
        course: "PSYC300",
        desc: "Overview to the fundamental theoretical, conceptual, and practical issues in psychological research in both the laboratory and the field.",
        icons: [{ name: "R", src: "r-project" }]
    },
    {
        title: "Organization of Programming Languages",
        course: "CMSC330",
        desc: "A study of programming languages, including their syntax, semantics, and implementation - including dynamic, scripting, functional, and memory safe systems programming.",
        icons: [{ name: "Ruby", src: "ruby" }, { name: "OCaml", src: "ocaml" }]
    },
    {
        title: "Intro. Computer Systems",
        course: "CMSC216",
        desc: "Covers concepts including: C programming, introductory systems programming, assembly language, UNIX, machine data representation, thread management, optimization, and virtual memory.",
        icons: [{ name: "C", src: "c" }, { name: "Linux", src: "linux" }]
    },
];