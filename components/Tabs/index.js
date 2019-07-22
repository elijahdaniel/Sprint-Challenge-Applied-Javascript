// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios
    .get('https://lambda-times-backend.herokuapp.com/topics')
    .then(data => {
        console.log(data.data);
        tabs(data.data.topics);
    })
    .catch((err) => {
        console.log('error: ', err);
    })

const topicContainer = document.querySelector('.topics');

const tabs = (topics) => {
    const createTabs = tab => {
        const tabDiv = document.createElement('div');
        const button = document.createElement('a');

        tabDiv.classList.add('tab')
        button.classList.add('topics');

        button.innerHTML = tab;

        tabDiv.appendChild(button);
        
        return tabDiv;
    }

    topics.forEach(topic => {
        topicContainer.appendChild(createTabs(topic));
    })
}