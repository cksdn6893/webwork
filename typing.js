//무작위 인용문
const quotes = [
    'When you have',
    'There is nothing',
    'I ought to.',
    'I never make exceptions.',
    'What one man',
    'Nothing clears up',
    'Education never ends,',
    ];

    //고정값이 계속 바귀니 let사용
    let words = []; //현재 선택된 인용문을 단어 단위로 분할하여 배열로 저장
    let wordIndex = 0; //현재 타이핑해야 할 단어의 인덱스를 추적
    let startTime = Date.now(); //사간 측정

    //바뀔 일이 없어 const 사용
    const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
const startButton = document.getElementById('start');


    document.getElementById('start').addEventListener('click', () => {
        const quoteIndex = Math.floor(Math.random() * quotes.length); // 무작위 인덱스생성
        const quote = quotes[quoteIndex]; // 무작위 인덱스 값으로 인용문 선택
        words = quote.split(' '); // 공백 문자를 기준으로 words 배열에 저장
        wordIndex = 0; // 초기화
        const spanWords = words.map(function(word) { return `<span>${word} </span>`});
        // span 태그로 감싼 후 배열에 저장
        quoteElement.innerHTML = spanWords.join(''); // 하나의 문자열로 결합 및 설정
        quoteElement.childNodes[0].className = 'highlight'; // 첫번째 단어 강조
        messageElement.innerText = ''; // 메시지 요소 초기화
        typedValueElement.value = ''; //입력 필드 초기화
        typedValueElement.focus(); // 포커스 설정
        startTime = new Date().getTime(); // 타이핑 시작 시간 기록

        typedValueElement.disabled = false; // 게임 시작하면 입력 필드 활성화
        startButton.disabled = true; // 시작 버튼 비활성화
        });


            typedValueElement .addEventListener('input', () => {
                const currentWord = words[wordIndex ]; // 현재 타이핑할 단어를 currentWord 에 저장
                const typedValue = typedValueElement .value; // 입력한 값을 typedValue 에 저장
                if (typedValue === currentWord && wordIndex === words.length - 1) { // 마지막 단어까지 정확히 입력했는 지 체크
                const elapsedTime = new Date().getTime() - startTime ; // 타이핑에 소요된 시간 계산
                const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.` ; // 타이핑 완료 메시지
                messageElement .innerText = message ; //생성된 메시지 화면에 표시

                typedValueElement.disabled = true; // 게임 완료 후 입력 필드 비활성화
                startButton.disabled = false; // 시작 버튼 활성화
                } 
                
                else if (typedValue .endsWith(' ') && typedValue .trim() === currentWord ) { // 입력된 값이 공백으로 끝났는지와 공백을 제거한 값이 현재 단어와 일치하는 지 확인
                typedValueElement .value = ''; // 입력 필드 초기화하여 다음 단어 입력 준비
                wordIndex ++; // 다음 단어로 이동
                for (const wordElement of quoteElement .childNodes ) { // 모든 강조 표시 제거
                wordElement .className = ''; // 클래스 제거
                }
                quoteElement .childNodes [wordIndex ].className = 'highlight'; // 다음으로 타이핑할 단어에 클래스 추가
                } else if (currentWord .startsWith( typedValue )) { //현재 단어의 일부를 맞게 입력하고 있는 지 확인
                typedValueElement .className = ''; // 올바르면 클래스 제거
                } else {
                typedValueElement .className = 'error'; // 틀리면 error 클래스 추가
                }
                });

