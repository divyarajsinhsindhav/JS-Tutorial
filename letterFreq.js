const letterFrequency = (pharse) => {
    //letterFrequency('haha') 👉 {'h':2, 'a':2}
    let frequency = {}
    for(const letters of pharse){
        if (letters in frequency ) {
            frequency[letters] = frequency[letters] + 1 
        } else {
            frequency[letters] = 1
        }
    }
    console.log(frequency)
}

const pharse = 'haha'
letterFrequency(pharse)