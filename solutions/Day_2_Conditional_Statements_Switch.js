function getLetter(s) {
    const letter = ['A', 'B', 'C', 'D'];
    const arr1 = ['a', 'e', 'i', 'o', 'u'];
    const arr2 = ['b', 'c', 'd', 'f', 'g'];
    const arr3 = ['h', 'j', 'k', 'l', 'm'];
    const arr4 = ['n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

    switch (true) {
        case arr1.includes(s.charAt(0)):
            return letter[0];
        case arr2.includes(s.charAt(0)):
            return letter[1];
        case arr3.includes(s.charAt(0)):
            return letter[2];
        case arr4.includes(s.charAt(0)):
            return letter[3];
    }

    return -1;
}