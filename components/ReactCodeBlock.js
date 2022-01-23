import { CodeBlock, dracula } from "react-code-blocks";
import styled from 'styled-components';

const CodeWrapper = styled.div`
    padding: 50px;
`;

const useMemo = ({code}) => {
    return (
        <CodeWrapper>
            <CodeBlock
                text={code}
                language={'JavaScript'}
                showLineNumbers={true}
                theme={dracula}
            />
        </CodeWrapper>
    )
}

export default useMemo;