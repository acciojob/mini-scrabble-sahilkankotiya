//your code here
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Mini Scrabble Letter Counter</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 40px;
      text-align: center;
      background-color: #f0f0f0;
    }

    input[type="text"] {
      width: 60%;
      padding: 10px;
      font-size: 18px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }

    h3 {
      margin-top: 20px;
      font-size: 24px;
      color: #333;
    }
  </style>
</head>
<body>

  <h2>Mini Scrabble - Real-time Letter Counter</h2>
  <input type="text" id="evaluatedText" placeholder="Type your word here..." />
  <h3 id="letterCount">0</h3>

  <script>
    // JavaScript to count letters in real-time
    const input = document.getElementById("evaluatedText");
    const output = document.getElementById("letterCount");

    input.addEventListener("input", () => {
      output.textContent = input.value.length;
    });
  </script>

</body>
</html>
