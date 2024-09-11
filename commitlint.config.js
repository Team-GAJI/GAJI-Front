module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'develop-rule': [2, 'always'],
    },
    plugins: [
        {
            rules: {
                'type-enum': [
                    2,
                    'always',
                    ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'refactor', 'style', 'test'],
                ],
                'develop-rule': ({ subject }) => {
                    // 커밋 메시지의 첫 단어가 라벨인지 확인
                    const hasLabel = /^(\w+):/.test(subject);
                    // 커밋 메시지가 100글자 이내인지 확인
                    const isValidLength = subject.length <= 100;

                    // 규칙 적용 결과 반환
                    if (!hasLabel) {
                        return [false, '커밋 메시지에 라벨이 포함되어야 합니다. ex) feat: 새로운 기능 추가'];
                    }
                    if (!isValidLength) {
                        return [false, '커밋 메시지는 100자 이내로 작성해야 합니다.'];
                    }
                    return [true];
                },
            },
        },
    ],
};
