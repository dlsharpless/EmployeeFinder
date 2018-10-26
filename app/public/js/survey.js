let traitList = [
    { quality: "agreeable", queries: 5 },
    { quality: "conscientious", queries: 5 },
    { quality: "extraverted", queries: 5 },
    { quality: "neurotic", queries: 5 },
    { quality: "open to experience", queries: 5 }
]

for (i = 0; i < 10; i++) {
    let x = Math.floor(Math.random() * traitList.length)
    let y = Math.floor(Math.random() * traitList.length)
    while (x === y) {
        y = Math.floor(Math.random() * traitList.length)
    }
    console.log(`Are you more ${x} or ${y}?`)
    traitList[x].queries--;
    traitList[y].queries--;
    if (traitList[x].queries===0){
        
    }
}

// $.ajax