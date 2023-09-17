import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FiAlertCircle } from "react-icons/fi";

function LoanForm(props) {
    const navigate = useNavigate();

    const [yearIncome, setYearIncome] = useState(''); // 연 소득수준
    const [assetLocation, setAssetLocation] = useState(''); // 물건소재지
    const [homeCategory, setHomeCategory] = useState(''); // 주택구분
    const [homeFlag, setHomeFlag] = useState(''); // 주택보유여부
    const [loanFlag, setLoanFlag] = useState(''); // 주택관련대출보유여부
    const [loanPurpose, setLoanPurpose] = useState(''); // 대출용도
    const [wishAmount, setWishAmount] = useState(''); // 대출희망금액
    const [consent, setConsent] = useState(false); // 개인정보활용 동의 항목

    // 입력 여부 체크
    const [yearIncomeError, setYearIncomeError] = useState(''); // 연 소득수준
    const [assetLocationError, setAssetLocationError] = useState(''); // 물건소재지
    const [homeCategoryError, setHomeCategoryError] = useState(''); // 주택구분
    const [homeFlagError, setHomeFlagError] = useState(''); // 주택보유여부
    const [loanFlagError, setLoanFlagError] = useState(''); // 주택관련대출보유여부
    const [loanPurposeError, setLoanPurposeError] = useState(''); // 대출용도
    const [wishAmountError, setWishAmountError] = useState(''); // 대출희망금액
    const [consentError, setConsentError] = useState(''); // 개인정보활용 동의 항목

    const handleYearIncomeChange = (e) => {
        const newYearIncome = e.target.value;
        setYearIncome(newYearIncome);

        setYearIncomeError('');
    };

    const handleAssetLocationChange = (e) => {
        const newAssetLocation = e.target.value;
        setAssetLocation(newAssetLocation);

        setAssetLocationError('');
    };

    const handleHomeCategoryChange = (e) => {
        const newHomeCategory = e.target.value;
        setHomeCategory(newHomeCategory);

        setHomeCategoryError('');
    };

    const handleHomeFlagChange = (e) => {
        const newHomeFlag = e.target.value;
        setHomeFlag(newHomeFlag);

        setHomeFlagError('');
    };

    const handleLoanFlagChange = (e) => {
        const newLoanFlag = e.target.value;
        setLoanFlag(newLoanFlag);

        setLoanFlagError('');
    };

    const handleLoanPurposeChange = (e) => {
        const newLoanPurpose = e.target.value;
        setLoanPurpose(newLoanPurpose);

        setLoanPurposeError('');
    };

    const handleWishAmountChange = (e) => {
        const newWishAmount = e.target.value;
        setWishAmount(newWishAmount);

        setWishAmountError('');
    };

    const handleConsentChange = (e) => {
        const newConsent = e.target.checked;
        setConsent(newConsent);

        // 입력되면 에러 메시지 초기화
        setConsentError('');
    }

     // 폼 제출 버튼 눌렀을 때 실행될 함수
     const handleForm = () => {

        // 하나라도 입력되지 않은 경우 에러 메시지 표시
        if (!yearIncome || !assetLocation || !homeCategory || !homeFlag || !loanFlag || !loanPurpose || !wishAmount || !consent) {
            if (!yearIncome) {
                setYearIncomeError('연 소득수준을 입력해주세요.');
            }
            if (!assetLocation) {
                setAssetLocationError('물건소재지를 입력해주세요.');
            }
            if (!homeCategory) {
                setHomeCategoryError('주택구분을 입력해주세요.');
            }
            if (!homeFlag) {
                setHomeFlagError('주택보유여부에 대해 선택해주세요.');
            }
            if (!loanFlag) {
                setLoanFlagError('주택관련대출보유여부에 대해 선택해주세요.');
            }
            if (!loanPurpose) {
                setLoanPurposeError('대출용도를 입력해주세요.');
            }
            if (!wishAmount) {
                setWishAmountError('대출희망금액을 입력해주세요.');
            }
            if (!consent) {
                setConsentError('동의해주세요.');
            }
            return;
        }

        navigate('/customer-mypage');

    };

    return (// 방문고객->디비에서 / 상담직원, 방문예약일, 상담내용->다른 페이지에서 물고와야함
        <Container>
            <Title>영업점 방문예약 신청</Title>
            <Table>
                <tbody>
                    <TableRow>
                        <TableHeader>방문고객</TableHeader>
                        <TableCell>
                            <Text>전민형 고객님</Text>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableHeader>상담직원(선택)</TableHeader>
                        <TableCell>
                            <Text>신동렬 행원</Text>
                            <Alert><FiAlertCircle style={{color: '#0c90e3', fontSize: '20px', marginRight: '5px'}}/>방문영업점 상황에 따라 직원이 변경될 수 있습니다.</Alert>
                        </TableCell>
                    </TableRow>
                    
                    <TableRow>
                        <TableHeader>방문예약일</TableHeader>
                        <TableCell>
                                <Text>2023년 9월 7일 오후 7:30 예약</Text>
                                <Alert><FiAlertCircle style={{color: '#0c90e3', fontSize: '20px', marginRight: '5px'}}/>방문예약은 당일은 불가하며, 다음 영업일 13시부터 선택 가능합니다.</Alert>
                                <Alert><FiAlertCircle style={{color: '#0c90e3', fontSize: '20px', marginRight: '5px'}}/>먼저 상담중이신 고객님의 응대가 끝나지 않을 경우 대기시간이 발생할 수 있으니 양해부탁드립니다.</Alert>
                        </TableCell>
                    </TableRow>
                    <TableRowLast>
                        <TableHeader>상담내용</TableHeader>
                        <TableCell>개인대출</TableCell>
                    </TableRowLast>
                </tbody>
            </Table>

            <Title>사전상담표</Title>
            <Table>
                <tbody>
                    <TableRow>
                        <TableHeader>연 소득수준</TableHeader>
                        <TableCellInput>
                            <Input
                                type="text"
                                placeholder="연 소득수준을 입력하세요"
                                onChange={handleYearIncomeChange}
                                value={yearIncome}
                            />
                            <Text style={{marginLeft: '10px'}}>만원</Text>
                        </TableCellInput>
                        {yearIncomeError && <ErrorMessage>{yearIncomeError}</ErrorMessage>}
                    </TableRow>

                    <TableRow>
                        <TableHeader>물건소재지</TableHeader>
                        <TableCellInput>
                            <Input
                                type="text"
                                placeholder="입력 예) 서울시 중구 동암로 OO (동/호수)"
                                onChange={handleAssetLocationChange}
                                value={assetLocation}
                            />
                        </TableCellInput>
                        {assetLocationError && <ErrorMessage>{assetLocationError}</ErrorMessage>}
                    </TableRow>

                    <TableRow>
                        <TableHeader>주택구분</TableHeader>
                        <TableCellInput>
                            <Input
                                type="text"
                                placeholder="입력 예) 아파트, 오피스텔 등"
                                onChange={handleHomeCategoryChange}
                                value={homeCategory}
                            />
                        </TableCellInput>
                        {homeCategoryError && <ErrorMessage>{homeCategoryError}</ErrorMessage>}
                    </TableRow>
                    
                    <TableRow>
                        <TableHeader>주택보유여부</TableHeader>
                        <TableCellInput>
                            <InputCheck
                                type="radio"
                                name="home"
                                value="미보유"
                                checked={homeFlag === '미보유'}
                                onChange={handleHomeFlagChange}
                            />
                            미보유
                            <InputCheck
                                type="radio"
                                name="home"
                                value="1주택"
                                checked={homeFlag === '1주택'}
                                onChange={handleHomeFlagChange}
                            />
                            1주택
                            <InputCheck
                                type="radio"
                                name="home"
                                value="2주택 이상"
                                checked={homeFlag === '2주택 이상'}
                                onChange={handleHomeFlagChange}
                            />
                            2주택 이상
                        </TableCellInput>
                        {homeFlagError && <ErrorMessage>{homeFlagError}</ErrorMessage>}
                    </TableRow>

                    <TableRow>
                        <TableHeader>주택관련대출보유여부</TableHeader>
                        <TableCellInput>
                            <InputCheck
                                type="radio"
                                name="loan"
                                value="미보유"
                                checked={loanFlag === '미보유'}
                                onChange={handleLoanFlagChange}
                            />
                            미보유
                            <InputCheck
                                type="radio"
                                name="loan"
                                value="1주택"
                                checked={loanFlag === '1주택'}
                                onChange={handleLoanFlagChange}
                            />
                            1주택
                            <InputCheck
                                type="radio"
                                name="loan"
                                value="2주택 이상"
                                checked={loanFlag === '2주택 이상'}
                                onChange={handleLoanFlagChange}
                            />
                            2주택 이상
                        </TableCellInput>
                        {loanFlagError && <ErrorMessage>{loanFlagError}</ErrorMessage>}
                    </TableRow>

                    <TableRow>
                        <TableHeader>대출용도</TableHeader>
                        <TableCellInput>
                            <Input
                                type="text"
                                placeholder="대출용도를 입력하세요"
                                onChange={handleLoanPurposeChange}
                                value={loanPurpose}
                            />
                        </TableCellInput>
                        {loanPurposeError && <ErrorMessage>{loanPurposeError}</ErrorMessage>}
                    </TableRow>

                    <TableRowLast>
                        <TableHeader>대출희망금액</TableHeader>
                        <TableCellInput>
                            <Input
                                type="text"
                                placeholder="대출희망금액을 입력하세요"
                                onChange={handleWishAmountChange}
                                value={wishAmount}
                            />
                            <Text style={{marginLeft: '10px'}}>만원</Text>
                        </TableCellInput>
                        {wishAmountError && <ErrorMessage>{wishAmountError}</ErrorMessage>}
                    </TableRowLast>
                </tbody>
            </Table>

            <ConsentTable>
                <tbody>
                    <ConsentRow>
                        개인(신용)정보 수집·이용 동의서 (필수) (영업점 방문예약(개인대출))
                        <ConsentBtn>내용 보기</ConsentBtn>
                    </ConsentRow>
                    <ConsentRowLast>
                        <InputCheck
                            type="checkbox"
                            checked={consent}
                            onChange={handleConsentChange}
                        />
                        본인은 귀 행이 개인(신용)정보 수집·이용 동의 상의 개인정보 수집 및 이용에 동의합니다.
                        {consentError && <ConsentErrorMessage>{consentError}</ConsentErrorMessage>}
                    </ConsentRowLast>
                    
                </tbody>
                
            </ConsentTable>

            <BtnWrapper>
                <FormBtn onClick={handleForm}>방문예약 신청</FormBtn>
            </BtnWrapper>
            
        </Container>
    );
}

const Container = styled.div`
    margin-left: 300px;
    margin-right: 300px;
    /* display: flex;
    flex-direction: column; */
    height: calc(100vh - 120px);
    /* border: 1px solid green; */
`;

const ErrorMessage = styled.div`
    color: red;
    font-size: 14px;
    margin-top: 5px;
`;

const ConsentErrorMessage = styled.div`
    color: red;
    font-size: 14px;
    margin-left: auto;
`;

const Title = styled.div`
font-size: 28px;
font-weight: 700;
margin-top: 50px;
margin-bottom: 20px;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
`;

const TableRow = styled.tr`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #b0b0b0;
    
`;

const TableRowLast = styled.tr`
    display: flex;
    justify-content: space-between;
`;

const TableHeader = styled.th`
    width: 300px;
    background-color: #f0f0f0;
    font-weight: bold;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    padding: 20px;
`;

const TableCell = styled.td`
    flex: 1;
    padding: 20px;
    border-left: 1px solid #b0b0b0;
    font-size: 18px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    align-items: flex-start;
    line-height: 30px;
`;

const TableCellInput = styled.td`
    flex: 1;
    padding: 20px;
    border-left: 1px solid #b0b0b0;
    font-size: 18px;
    display: flex;
    align-items: center;
    
`;

const Input = styled.input`
    display: inline-flex;
    width: 400px;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 10px;

    border: 1px solid #bdb4b4;
    outline: none;

    font-size: 16px;
    font-weight: 500;

    &::placeholder {
        color: #bdb4b4;
    }
`;

const InputCheck = styled.input`
margin-left: 10px;
margin-right: 10px;
`;

const Text = styled.div`

`;

const Alert = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
`;

const ConsentTable = styled.table`
margin-top: 100px;
margin-bottom: 100px;
width: 100%;
border: 1px solid #b0b0b0; 
    border-collapse: collapse;
    font-size: 20px;
`;

const ConsentRow = styled.tr`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #b0b0b0;
    padding: 20px;
    font-weight: 700;
`;

const ConsentRowLast = styled.tr`
    display: flex;
    padding: 20px;
    align-items: center;

`;

const ConsentBtn = styled.button`
    width: 100px;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    border: 1px solid black;
    background-color: white;
    padding-top: 5px;
    padding-bottom: 5px;
`;

const BtnWrapper = styled.div`
    width:100%;
    text-align: center;
`;

const FormBtn = styled.button`
    width: 200px;
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 20px;
    font-weight: 500;
    color: white;
    cursor: pointer;
    background-color: black;
    border: 2px solid black;
    border-radius: 10px;
    margin-bottom: 100px;
`;

export default LoanForm;