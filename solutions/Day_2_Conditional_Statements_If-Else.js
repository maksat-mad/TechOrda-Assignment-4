function getGrade(score) {
    let grade = ['A', 'B', 'C', 'D', 'E', 'F'];
    if (25 < score && score <= 30) {
        return grade[0];
    } else if (20 < score && score <= 25) {
        return grade[1];
    } else if (15 < score && score <= 20) {
        return grade[2];
    } else if (10 < score && score <= 15) {
        return grade[3];
    } else if (5 < score && score <= 10) {
        return grade[4];
    } else if (0 <= score && score <= 5) {
        return grade[5];
    }
    return -1;
}