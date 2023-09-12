function divide (numerator,denominator){
    try{ 
     if (typeof numerator !== "number" && typeof denominator !== "number" ) {
        throw new Error("Всі аргументи повинні бути числами!!!");
    }
    if (denominator===0){
        throw new Error("Ділення на нуль не можливе!!!");
    }
    const result = numerator/denominator;
    return (`Результат ділення ${result}`)
    } catch (error){
        console.error("Помилка:",error.message);
    } finally {
        console.log("Завершення операції");
    }
    }
    
    console.log(divide(5,2));
    console.log(divide(5,0));
    console.log(divide("lad",2));