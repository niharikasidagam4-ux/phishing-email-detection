
function detectPhishing() {

    const email =
        document.getElementById("emailText").value
        .toLowerCase()
        .trim();


    if (email === "") {

        alert("Please enter email content.");

        return;
    }


    let score = 0;

    let features = [];


    // Urgent language

    const urgentWords = [
        "urgent",
        "immediately",
        "act now",
        "limited time",
        "account suspended"
    ];


    urgentWords.forEach(function(word) {

        if (email.includes(word)) {

            score += 15;

            features.push(
                "⚠️ Urgent or threatening language detected"
            );

        }

    });


    // Password requests

    const passwordWords = [
        "password",
        "login",
        "username",
        "verify your account"
    ];


    passwordWords.forEach(function(word) {

        if (email.includes(word)) {

            score += 15;

            features.push(
                "⚠️ Request for account credentials detected"
            );

        }

    });


    // Financial words

    const financialWords = [
        "bank",
        "credit card",
        "payment",
        "money",
        "account number"
    ];


    financialWords.forEach(function(word) {

        if (email.includes(word)) {

            score += 15;

            features.push(
                "⚠️ Financial information reference detected"
            );

        }

    });


    // Suspicious links

    if (
        email.includes("http://") ||
        email.includes("https://") ||
        email.includes("click here")
    ) {

        score += 20;

        features.push(
            "⚠️ Link or click request detected"
        );

    }


    // Prize / reward scams

    const rewardWords = [
        "winner",
        "won",
        "prize",
        "reward",
        "lottery",
        "free gift"
    ];


    rewardWords.forEach(function(word) {

        if (email.includes(word)) {

            score += 20;

            features.push(
                "⚠️ Prize or reward-related language detected"
            );

        }

    });


    // Keep score within 100

    if (score > 100) {

        score = 100;

    }


    const result =
        document.getElementById("result");

    const prediction =
        document.getElementById("prediction");

    const confidence =
        document.getElementById("confidence");

    const meterBar =
        document.getElementById("meterBar");

    const featureList =
        document.getElementById("featureList");


    result.style.display = "block";


    if (score >= 40) {

        prediction.textContent =
            "⚠️ PHISHING EMAIL";

        prediction.style.color =
            "#dc2626";

        confidence.textContent =
            "Risk Score: " + score + "%";

        meterBar.style.width =
            score + "%";

        meterBar.style.background =
            "#dc2626";

    }

    else {

        prediction.textContent =
            "✅ SAFE EMAIL";

        prediction.style.color =
            "#16a34a";

        confidence.textContent =
            "Risk Score: " + score + "%";

        meterBar.style.width =
            Math.max(score, 10) + "%";

        meterBar.style.background =
            "#16a34a";

    }


    if (features.length === 0) {

        features.push(
            "✅ No common phishing indicators detected"
        );

    }


    featureList.innerHTML = "";


    features.forEach(function(feature) {

        const div =
            document.createElement("div");

        div.className = "feature";

        div.textContent = feature;

        featureList.appendChild(div);

    });

}
