import styled from "styled-components";
import theme from "../../config/theme";

export const StyledTable = styled.table`
    box-shadow: 0px 0px 6px rgb(162 162 162 / 25%);
    border-radius: 3px;
    display: flex;
    width: 80vw;
    flex-direction: column;
    border: 1px solid #E6E6E6;
    
    
    sc-kLwhqv hCIYer available { 
        background: rgba(52, 195, 143, 0.2);
        color: #34C38F;
        border-radius: 3px;
    }
`;


export const TableHead = styled.th`
`;

export const TableHeadContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 97px;
    align-items: center;
    padding: ${theme.sizes.md};

    p{

        font-weight: ${theme.fontWeight.default};
        font-size: ${theme.fontSizes.paragraph1};
        line-height: 30px;
        letter-spacing: -0.02em;
        margin-block-start: 0em;
        margin-block-end: 0em;
    }
`;


export const TableFilterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const PaginationContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 313px;
`;

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 206px;
    height: 40px;
    background: #F9F9F9;
    border: 1px solid #E6E6E6;
    box-sizing: border-box;
    box-shadow: 0px 0px 6px rgba(162, 162, 162, 0.25);
    border-radius: 3px;

    input { 
        border: none;
    }
    input:focus {
        outline: none;
    }
`;

export const PreviousPageButton = styled.button`
    display: flex;
    align-items: center;
    justity-content: space-between;
    max-width: 97px;
    height: 28px;
    padding: 8px 11px;
    background: #EDEDED;
    color: #858585;
    font-weight: 600;
    font-size: 14;
    border: none;
    border-radius: 3px;
`;


export const NextPageButton = styled.button`
    display: flex;
    justity-content: space-between;
    align-items: center;
    max-width: 97px;
    height: 28px;
    padding: 5px 8px;
    background: #EDEDED;
    color: #858585;
    font-weight: 600;
    font-size: 14;
    border: none;
    border-radius: 3px;
`;

export const PageNumberContainer = styled.div`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-weight: 600;
    font-size: 13px;
    border-radius: 3px;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 22px;

`;

export const TableHeader = styled.th`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: ${theme.sizes.xxlg};
    font-weight: ${theme.fontWeight.default};
    font-size: ${theme.fontSizes.paragraph};
    background: ${theme.colors.white1};
`;

export const TableRow = styled.tr`
    display: flex;
    flex-direction: row;
    height: 50px;
    text-align: center;
    border-radius: 3px ;
    justify-content: space-around;
    
`;

export const TableBody = styled.tbody`
    background: ${theme.colors.white};
    
`;

export const TableData = styled.td`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: ${theme.sizes.md};
    font-size: ${theme.fontSizes.label};
    font-weight: ${theme.fontWeight.md};
    line-height: 24px;
    color: #495057;
    letter-spacing: -0.02em;
`;


