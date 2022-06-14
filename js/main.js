const apiUrl = 'http://localhost:3001/collection/';

async function callApi(url) {
    let response = await fetch(url);

    if(response.status !== 200) {
        return false;
    }

    let data = await response.json();
    return data;
}

async function getCollectionList() {
    const result = await callApi(url);
    return result;
} 

async function getArticleDetails(collectionId) {
    const result = await callApi(apiUrl + collectionId);
    return result.data;
} 

function generateNestedBlockOneHtml(article) {
    return `<div class="nested nested-one">
                <img class="secondary-image" src="${article.imageurl}" alt="secondary-image">
                <h2><span><img class="start-image" src="img/start.PNG" alt="start-image"></span> ${article.title}</h2>
                <p>${article.intro}</p>
                <span><i class="fa fa-clock-o"></i> ${article.published}h <i class="fa fa-comment-o" aria-hidden="true"> ${article.comments} </i></span>
            </div>`;
}

function generateCommonNestedBlockHtml(article) {
    return `<div class="nested nested-two">
                <div>
                    <h3>${article.title}</h3>
                </div>
                <div>
                    <img class="thumbnail-image" src="${article.imageurl}" alt="thumbnail-image">
                </div>
                <span><i class="fa fa-clock-o"></i> ${article.published}h </span>
            </div>`;
}

function generateLeftBlockHtml(article) {
    return `<div class="card hero nested">
                <img class="hero-image" src="${article.imageurl}" alt="hero-image">
                <h1><span><img class="start-image" src="img/start.PNG" alt="start-image"></span> ${article.title}</h1>
                <p>${article.intro}</p>
                <span><i class="fa fa-clock-o"></i> ${article.published}m </span>
            </div>`;
            
}

function generateMainHtml() {
    return `<div class="full-width-header"><h1>The Header Block</h1></div>
            <div class="grid-container">
                <div class="left-grid"></div>
                <div class="right-grid"></div>
                <div class="ad-grid"><h2>The Ad Block</h2></div>
            </div>`;
}

