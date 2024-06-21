const outputelement = document.querySelector("#output");
const copybutton = document.querySelector("#btncopy");
const lengthelement = document.querySelector("#length");
const numberelement = document.querySelector("#number");
const capatialelement = document.querySelector("#Captails");
const smallleterelement = document.querySelector("#small");
const symbolelement = document.querySelector("#symbol");
const form = document.querySelector("#frm");

// Button click method to copy password
copybutton.addEventListener("click", async () => {
    const pass = outputelement.value;
    console.log(pass);

    if (pass) {
        await navigator.clipboard.writeText(pass);
        alert("Text copied");
    } else {
        alert("There is no message");
    }
});

function GenerateRandomChar(max, min) {
    const limit = max - min + 1;
    return String.fromCharCode(Math.floor(Math.random() * limit) + min); // Fixed method name
}

function CapitalLetters() {
    return GenerateRandomChar(65, 90);
}

function SmallLetters() {
    return GenerateRandomChar(97, 122);
}

function NumbersValue() {
    return GenerateRandomChar(48, 57);
}

function SymbolsValue() {
    const Symbols = "!%£$%^&*()_+¬`";
    return Symbols[Math.floor(Math.random() * Symbols.length)];
}

const FunctionElement = [
    {
        element: capatialelement, // Check for capital letters
        fun: CapitalLetters
    },
    {
        element: smallleterelement, // Check for small letters
        fun: SmallLetters
    },
    {
        element: numberelement, // Check for numbers
        fun: NumbersValue
    },
    {
        element: symbolelement, // Check for symbols
        fun: SymbolsValue
    }
];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const lim = parseInt(lengthelement.value); // Fixed value retrieval and parsing
    let genratpassword = "";

    const activeFunctions = FunctionElement.filter(item => item.element.checked);
    if (activeFunctions.length === 0) {
        alert("Please select at least one character type.");
        return;
    }

    for (let i = 0; i < lim; i++) {
        const index = Math.floor(Math.random() * activeFunctions.length);
        const LETTER = activeFunctions[index].fun();
        genratpassword += LETTER;
    }

    outputelement.value = genratpassword;
});
