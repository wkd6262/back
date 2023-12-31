const axios = require("axios");

const searchValue = async (req, res) => {
  try {
    const searchValue = req.query.q;
    // 알라딘 API 요청을 서버에서 보냄
    const response = await axios.get(
      "http://www.aladin.co.kr/ttb/api/ItemSearch.aspx",
      {
        params: {
          ttbkey: "ttbdnjswns62621635002", // 여기에 실제 TTBKey를 넣어주세요
          QueryType: "Keyword",
          Query: searchValue,
          MaxResults: 10,
          start: 1,
          SearchTarget: "Book",
          output: "xml",
          Version: "20131101",
          Cover: "Big",
        },
      }
    );

    // 알라딘 API 응답을 클라이언트에게 전달
    res.json(response.data);
  } catch (error) {
    // 에러 처리
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// 시작 부분 - 베스트셀러
const startbestValue = async (req, res) => {
  try {
    const searchValue = req.query.q;
    // 알라딘 API 요청을 서버에서 보냄
    const response = await axios.get(
      "http://www.aladin.co.kr/ttb/api/ItemList.aspx",
      {
        params: {
          ttbkey: "ttbdnjswns62621635002", // 여기에 실제 TTBKey를 넣어주세요
          QueryType: "Bestseller",
          Query: searchValue,
          Cover: "Big",
          MaxResults: 10,
          start: 1,
          SearchTarget: "Book",
          output: "xml",
          Version: "20131101",
        },
      }
    );

    // 알라딘 API 응답을 클라이언트에게 전달
    res.json(response.data);
  } catch (error) {
    // 에러 처리
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
// 끝 부분 - 베스트셀러
// 시작 부분 - 신간
const endbestValue = async (req, res) => {
  try {
    const searchValue = req.query.q;
    // 알라딘 API 요청을 서버에서 보냄
    const response = await axios.get(
      "http://www.aladin.co.kr/ttb/api/ItemList.aspx",
      {
        params: {
          ttbkey: "ttbdnjswns62621635002", // 여기에 실제 TTBKey를 넣어주세요
          QueryType: "ItemNewSpecial",
          Query: searchValue,
          Cover: "Big",
          MaxResults: 10,
          start: 1,
          SearchTarget: "Book",
          output: "xml",
          Version: "20131101",
        },
      }
    );

    // 알라딘 API 응답을 클라이언트에게 전달
    res.json(response.data);
  } catch (error) {
    // 에러 처리
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
// 신간 전체
const newValue = async (req, res) => {
  try {
    const searchValue = req.query.q;
    // 알라딘 API 요청을 서버에서 보냄
    const response = await axios.get(
      "http://www.aladin.co.kr/ttb/api/ItemList.aspx",
      {
        params: {
          ttbkey: "ttbdnjswns62621635002", // 여기에 실제 TTBKey를 넣어주세요
          QueryType: "ItemNewAll",
          Query: searchValue,
          Cover: "Big",
          MaxResults: 10,
          start: 1,
          SearchTarget: "Book",
          output: "xml",
          Version: "20131101",
        },
      }
    );

    // 알라딘 API 응답을 클라이언트에게 전달
    res.json(response.data);
  } catch (error) {
    // 에러 처리
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  newValue,
  endbestValue,
  startbestValue,
  searchValue,
};
