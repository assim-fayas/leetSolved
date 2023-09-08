var tribonacci = function(n) {
    if (n <= 0) {
        return 0;
    } else if (n <= 2) {
        return 1;
    } else {
        const tri = [0, 1, 1];
        for (let i = 3; i <= n; i++) {
            tri[i] = tri[i - 1] + tri[i - 2] + tri[i - 3];
            
        }
        return tri[n];
    }
};