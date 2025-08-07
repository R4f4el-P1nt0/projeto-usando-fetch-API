const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    followers: 0,
    following: 0,
    username: '',
    repositories: [],
    events: [],

    setInfo(githubUser) {
        this.avatarUrl = githubUser.avatar_url;
        this.name = githubUser.name;
        this.bio = githubUser.bio;
        this.followers = githubUser.followers;
        this.following = githubUser.following;
        this.username = githubUser.login;
    },

    setRepositories(repositories) {
        this.repositories = repositories;
    },

    setEvents(events) {
        this.events = events;
    }
}

export { user };