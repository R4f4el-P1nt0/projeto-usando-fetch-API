const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                            <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                            <div class="data">
                            <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                            <p>${user.bio ?? 'Não possui nome cadastrado 😢'}</p> <br>
                            <h4>👥 Seguidores: ${user.followers}</h4>
                            <h4>👥 Seguindo: ${user.following}</h4>
                            </div>
                        </div>`

        let repositoriesItems = '';
        user.repositories.forEach(repo => repositoriesItems += `<li><a href="${repo.html_url}" target="_blank">${repo.name} <ul class: "activities">    <li>🍴: ${repo.forks}</li>
        <li>🌟: ${repo.stargazers_count}</li>
        <li>👁️‍🗨️: ${repo.watchers}</li>
        <li>💻: ${repo.language}</li>   </ul></a></li>`);

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2>Repositórios</h2>
                                            <ul>${repositoriesItems}</ul>
                                        </div>`;
        }

        let eventsItems = '';
        user.events.forEach(event => {
            if (event.type === "CreateEvent") {
                eventsItems += `<li><div class= "repos-name">${event.repo.name}</div></li>`;
            } else if (event.type === "PushEvent") {
                const commitMsg = event.payload.commits?.[0]?.message ?? '';
                eventsItems += `<li><div class= "repos-name">${event.repo.name}</div> - "${commitMsg}"</li>`;
            } else {
                eventsItems += `<li><a href="${event.html_url}" target="_blank"></a></li>`;
            }
        });

        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class="events section">
                                            <h2>Eventos</h2><br>
                                            <ul>${eventsItems}</ul>
                                        </div>`;
        }
    }
}
export { screen };