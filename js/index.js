document.addEventListener("DOMContentLoaded", function(event) {
    const collectionId = 'awesome-feed';
    let mergeRightBlockHtml = '';

    document.querySelector('#app').insertAdjacentHTML('beforeend',generateMainHtml());

    getArticleDetails(collectionId).then(function(result){
        for(let i=0; i<result.length; i++) {
            switch(i) {
                case 0: 
                    document.querySelector('.left-grid').insertAdjacentHTML('beforeend',generateLeftBlockHtml(result[i]));
                    break;
                case 1: 
                    mergeRightBlockHtml += generateNestedBlockOneHtml(result[i]);
                    break;
                case 2: 
                case 3: 
                    mergeRightBlockHtml += generateCommonNestedBlockHtml(result[i]);
                    break;
            }
        }

        if(mergeRightBlockHtml.length > 0) {
            document.querySelector('.right-grid').insertAdjacentHTML('beforeend',mergeRightBlockHtml);
        }
    });
});
