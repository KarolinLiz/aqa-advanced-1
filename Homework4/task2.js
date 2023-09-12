function validate(age) {
    if(age>=18){
        console.log("Is the person adult? = true")
        return
    }
    console.log("Is the person adult? = false")
}
validate(25)
validate(15)