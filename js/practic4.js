const friends = ['Jone', 'Jack', 'Nin', 'Whiteson', 'Jacika', 'Tom', 'Brably'];

const checkDo = (friends) => {
    let evenFriends = [];
    for (const friend of friends) {
        if (friend.length % 2 === 0) {
            evenFriends.push(friend);
        }
    }
    return evenFriends;

}

const getEventFriends = checkDo(friends);
console.log(getEventFriends);