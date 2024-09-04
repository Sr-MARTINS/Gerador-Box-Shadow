//  Logica
class boxShadowGeneretor {
    constructor(
        horizantal,
        horizontalRef,
        vertical,
        verticalRef, blur, 
        blurRef, 
        spread, 
        spreadRef,
        previewBox,
        color,
        colorRef,
        opacity,
        opacityRef,
        inset,
        rule,
        webkitRube,
        mozRube,

    ){
        this.horizontal = horizontal;
        this.horizontalRef = horizontalRef;
        this.vertical = vertical;
        this.verticalRef = verticalRef;
        this.blur = blur;
        this.blurRef = blurRef;
        this.spread = spread;
        this.spreadRef = spreadRef;
        this.color = color;
        this.colorRef = colorRef;
        this.opacity = opacity;
        this.opacityRef = opacityRef;
        this.insert = inset;

        this.previewBox = previewBox;
        this.rule = rule;
        this.webkitRube = webkitRube;
        this.mozRube = mozRube;

    }

    initialize() {
        this.horizontalRef.value = this.horizontal.value;
        this.verticalRef.value = this.vertical.value;
        this.blurRef.value = this.blur.value;
        this.spreadRef.value = this.spread.value;
        this.colorRef.value = this.color.value;
        this.opacityRef.value = this.opacity.value
    
        this.applyRule()
        this.showRule()
    }

    applyRule() {
        const rgbValue = this.hextoRgb(this.colorRef.value);

        const shadowRule = ` ${this.insetRef ? "inset" : ""} ${this.horizontalRef.value}px ${this.verticalRef.value}px ${this.blurRef.value}px ${this.spreadRef.value}px rgba(${rgbValue}, ${this.opacityRef.value})`

        this.previewBox.style.boxShadow = shadowRule;

        this.currentRule = shadowRule;
    }

    showRule() {
        this.rule.innerText = this.currentRule
        this.webkitRube.innerText = this.currentRule
        this.mozRube.innerText = this.currentRule
    }
    
    updateValue(type, value) {
        switch(type) {
            case "horizontal": 
                this.horizontalRef.value = value;
                break
            
            case "vertical":
                this.verticalRef.value = value;
                break

            case "blur":
                this.blurRef.value = value;
                break

            case "spread":
                this.spreadRef.value = value;
                break

            case "color":
                this.colorRef.value = value;
                break

            case "opacity":
                this.opacityRef.value = value;
                break

            case "inset":
                this.insetRef = value;
                break
        };

        this.applyRule()
        this.showRule()
    }

    hextoRgb (hex) {
        return `${("0x" + hex[1] + hex[2]) | 0}, ${("0x" + hex[3] + hex[4]) | 0}, ${
            ("0x" + hex[5] + hex[6]) | 0
        }`;
    }
}



// Elements
const horizontal = document.querySelector("#horizontal");
const horizontalRef = document.querySelector("#horizontal-value");
const vertical = document.querySelector("#vertical")
const verticalRef = document.querySelector("#vertical-value");
const blur = document.querySelector("#blur");
const blurRef = document.querySelector("#blur-value");
const spread = document.querySelector("#spread");
const spreadRef = document.querySelector("#spread-value");

const previewBox = document.querySelector(".box");

const color = document.querySelector("#color");
const colorRef = document.querySelector("#color-value");

const opacity = document.querySelector("#opacity");
const opacityRef = document.querySelector("#opacity-value");

const inset = document.querySelector("#inset")

const rule = document.querySelector(".rule span")
const webkitRube = document.querySelector(".webkit-rude span")
const mozRube = document.querySelector(".moz-rude span")

const boxShadow = new boxShadowGeneretor(
    horizontal,
    horizontalRef,
    vertical,
    verticalRef,
    blur, 
    blurRef, 
    spread, 
    spreadRef,
    previewBox,
    color,
    colorRef,
    opacity,
    opacityRef,
    inset,
    rule,
    webkitRube,
    mozRube
);

boxShadow.initialize();

// Event

horizontal.addEventListener("input", (e) => {
    const value = e.target.value;

    boxShadow.updateValue("horizontal", value)
});

vertical.addEventListener("input", (e) => {
    const value = e.target.value;

    boxShadow.updateValue("vertical", value)
});

blur.addEventListener("input", (e) => {
    const value = e.target.value;

    boxShadow.updateValue("blur", value)
});

spread.addEventListener("input", (e) => {
    const value = e.target.value;

    boxShadow.updateValue("spread", value)
});

color.addEventListener("input", (e) => {
    const value = e.target.value;

    boxShadow.updateValue("color", value)
});

opacity.addEventListener("input", (e) => {
    const value = e.target.value;

    boxShadow.updateValue("opacity", value)
});

inset.addEventListener("input", (e) => {
    const value = e.target.checked

    boxShadow.updateValue("inset", value)
})

    // elemento copy as as cordenadas das cores
const ruleCopy = document.querySelector("#copyElement");
const areaRule = document.querySelector("#rule-area");

areaRule.addEventListener("click", () => {
    const copy = areaRule.innerText.replace(/^\s*\n/gm, "");

    navigator.clipboard.writeText(copy).then(() => {
        ruleCopy.innerText = "Regas copiadas com sucesso!"
    })
  
    setTimeout(() => {
        ruleCopy.innerText = "Clique no quadro a cima para copiar as regras"
    }, 1000)
})
