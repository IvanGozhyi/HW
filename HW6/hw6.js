let choice = parseInt(prompt("What is your choice?"));


switch (choice) {
    case 1:
        let step = 0;

        let ladder = {
            up: () => {
                step++;
                return ladder;
            },
            down: () => {
                step--;
                return ladder;
            },
            showStep: () => {
                console.log(step);
                return ladder;
            }
        }

        ladder.up().down().up().up().up().down().showStep();
        break;
    case 2:
        const books = [
            {title: "JS для начинающих", price: 500, genre: "programming"},

            {title: "CSS в деталях", price: 300, genre: "design"},

            {title: "React быстро", price: 800, genre: "programming"},
        ];


        let filterByGenre = (books, genre) => {
            return books.filter(book => book.genre === genre);
        }

        let showTitle = (books) => {
            return books.map(books => books.title);
        }

        let totalPrice = (books) => {
            return books.reduce((total, book) => total + book.price, 0);
        }

        console.log(filterByGenre(books, "programming"));

        console.log(showTitle(books));

        console.log(totalPrice(books));

        break;

    case 3:

        const students = [
            {name: "Аня", grades: [5, 4, 4, 5]},
            {name: "Петя", grades: [3, 4, 4, 3]},
            {name: "Ира", grades: [5, 5, 5, 5]},
        ];

        let showNameAndAverage = (students) => {
            return students.map(students => ({
                name: students.name,
                average: students.grades.reduce((sum, g) => sum + g, 0) / students.grades.length
            }));
        }
        console.log(showNameAndAverage(students));

        const filtered = showNameAndAverage(students).filter(student => student.average > 3.5);

        console.log(filtered);


        break;

    case 4:
        const counter = {
            value: 0,
            increment() {
                setInterval(() => {
                    this.value++;
                    console.log(this.value);
                }, 1000);

            }
        };

        counter.increment();

        break;
    case 5:
        const items = [
            {name: "apple", quantity: 2, price: 30},
            {name: "banana", quantity: 5, price: 10},
            {name: "orange", quantity: 3, price: 20},
        ];

        let quantityXPrice = (items) => {
            return items.map(items => ({
                    name: items.name,
                    total: items.quantity * items.price,
                })
            )
        }

        console.log(quantityXPrice(items));

        const totalPrc = quantityXPrice(items).reduce((acc, item) => acc + item.total, 0);

        console.log(totalPrc);
        break;

    case 6:
        const words = ["apple", "banana", "avocado", "blueberry", "apricot"];

        const aWords = words.filter(word => word[0] === "a");

        console.log(aWords);

        const grouped = words.reduce((acc, word) => {
            const firstLetter = word[0];
            if (!acc[firstLetter]) {
                acc[firstLetter] = [];
            }
            acc[firstLetter].push(word);
            return acc;
        }, {});

        console.log(grouped);
        break;

    default:
        alert("Please enter number 1-6");
        break;


}



