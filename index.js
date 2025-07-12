function addNumbers(a, b) {
    const result = a + b;
    console.log(`Result is ${result}`);
    
    const size = result > 10 ? "Big" : "Small";
    console.log(size);
}

interface UserData {
    name: string;
    age: number;
    isAdmin: boolean;
}

const userData: UserData = {
    name: "John",
    age: 23,
    isAdmin: false
};

async function processData() {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Failed to fetch data:", error);
    }
}

addNumbers(5, 10);
