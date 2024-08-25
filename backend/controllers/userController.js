// Handle POST requests
exports.handlePostRequest = (req, res) => {
    const { data } = req.body;

    const userId = "VishwashPatel_30052003";

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));

    const highestLowercaseAlphabet = alphabets
        .filter(char => /[a-z]/.test(char))
        .sort().pop();

    res.json({
        is_success: true,
        user_id: userId,
        email: "patelvishwash.manojkumar2021@vitstudent.ac.in",
        roll_number: "21BCE5337",
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
    });
};

// Handle GET requests
exports.handleGetRequest = (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
};
