﻿import {getCodeDetailJson} from "../resources/codeDetailJson.js";
/**
 * 获取JS code 必须在获取基本信息之后调用 需要传入enName
 * @returns {Promise<unknown>}
 */
export function getJSCode(enName) {
  return new Promise((resolve) => {
    fetch('https://leetcode.cn/graphql/', getCodeDetailJson(enName)).then(((res) => res.json())).then((res) => {
      const id = res.data.question.questionFrontendId;
      const questionCodeDetail = res.data.question?.codeSnippets.filter((item) => item.lang === 'JavaScript');
      const jsCode = questionCodeDetail[0].code;
      resolve({ id, jsCode });
    });
  });
}