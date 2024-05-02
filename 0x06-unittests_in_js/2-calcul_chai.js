module.exports = function calculateNumber (type,a, b) {
    const A = Math.round(a);
    const B = Math.round(b);
    let c;
    switch (type) {
        case 'SUM':
            c = A + B;
            break;
        case 'SUBTRACT':
            c = A - B;
            break;
        case 'DIVIDE':
            if (B == 0) {
                return "Error"
            } else {
                c = A / B;
            }
            break;
    }
    return c;
};