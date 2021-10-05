const clients = [
    "Bigcorp"
    ,
    "Bigcorp"
    ,
    "Acme"
    ,
    "Bigcorp"
    ,
    "Zork"
    ,
    "Zork"
    ,
    "Abc"
    ,
    "Bigcorp"
    ,
    "Acme"
    ,
    "Bigcorp"
    ,
    "Bigcorp"
    ,
    "Zork"
    ,
    "Bigcorp"
    ,
    "Zork"
    ,
    "Zork"
    ,
    "Bigcorp"
    ,
    "Acme"
    ,
    "Bigcorp"
    ,
    "Acme"
    ,
    "Bigcorp"
    ,
    "Acme"
    ,
    "Littlecorp"
    ,
    "Nadircorp"]
const sortClients = (clients) => {
    const setClients = [...new Set(clients)]


    const countClientOccurences = (clients, client) => {
        return clients.reduce((count, item) => (item === client ? count + 1 : count), 0)
        //   BigCorp then it will loops through the client if the client === bigCorp means count +1 otherwise it will return the count initially count will be Zero

    };
    const countArray = []

    for (let i = 0; i < setClients.length; i++) {
        let pushObj = {
            company: setClients[i],
            percentage: (countClientOccurences(clients, setClients[i]) * 100) / clients.length
        }
        if (pushObj.percentage >= 7) {
            countArray.push(pushObj.company)
        }


    }

    return countArray.sort();
}



console.log(sortClients(clients));
