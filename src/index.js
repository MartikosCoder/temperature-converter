

exports.cToF = c => (c * 1.8 + 32).toFixed(2);

exports.fToC = f => ((f - 32) * 0.55556).toFixed(2); // 0.55556 stands for 5/9 => made for reducing calculations
