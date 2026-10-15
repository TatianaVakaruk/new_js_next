import {fetchUserData, fetchRepositories} from './gateways.js';
import {renderUserData} from './user.js';
import {renderRepos, cleanReposList} from './repos.js';
import {showSpiner, hideSpiner} from './spiner.js';
const defaultUser = {
    avatar_url: 'https://avatars3.githubusercontent.com/u1001',
    name: '',
    location: '',
};
renderUserData(defaultUser);

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');


const onSearchUser = () => {
    showSpiner();
    cleanReposList();
    const userName = userNameInputElem.value;
  return fetchUserData(userName).then(userData => {
        renderUserData(userData);
        return userData.repos_url;
    }).then(url => fetchRepositories(url))
    .then(reposList => {
     renderRepos(reposList);
        }).catch(err => {
        alert('Failed to load data');
    }).finally(() => {
        hideSpiner();
    })
};
showUserBtnElem.addEventListener('click', onSearchUser);

