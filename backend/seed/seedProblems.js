require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("../config/db");
const Problem = require("../models/Problem");

const problems = [
  {
    title: "Two Sum",
    slug: "two-sum",
    description:
      "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.",
    difficulty: "Easy",
    sampleTestCases: [
      { input: "nums = [2,7,11,15], target = 9", output: "[0,1]" },
      { input: "nums = [3,2,4], target = 6", output: "[1,2]" },
    ],
    hiddenTestCases: [
      { input: "nums = [3,3], target = 6", output: "[0,1]" },
      { input: "nums = [1,2,3,4,5], target = 9", output: "[3,4]" },
    ],
  },
  {
    title: "Valid Parentheses",
    slug: "valid-parentheses",
    description:
      "Given a string `s` containing just the characters `(`, `)`, `{`, `}`, `[` and `]`, determine if the input string is valid.\n\nAn input string is valid if brackets are closed by the same type of bracket, and closed in the correct order.",
    difficulty: "Easy",
    sampleTestCases: [
      { input: 's = "()"', output: "true" },
      { input: 's = "()[]{}"', output: "true" },
      { input: 's = "(]"', output: "false" },
    ],
    hiddenTestCases: [
      { input: 's = "([)]"', output: "false" },
      { input: 's = "{[]}"', output: "true" },
    ],
  },
  {
    title: "Binary Search",
    slug: "binary-search",
    description:
      "Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return -1.\n\nYou must write an algorithm with O(log n) runtime complexity.",
    difficulty: "Easy",
    sampleTestCases: [
      { input: "nums = [-1,0,3,5,9,12], target = 9", output: "4" },
      { input: "nums = [-1,0,3,5,9,12], target = 2", output: "-1" },
    ],
    hiddenTestCases: [
      { input: "nums = [5], target = 5", output: "0" },
      { input: "nums = [2,5], target = 5", output: "1" },
    ],
  },
  {
    title: "Merge Two Sorted Lists",
    slug: "merge-two-sorted-lists",
    description:
      "You are given the heads of two sorted linked lists `list1` and `list2`. Merge the two lists into one sorted list by splicing together the nodes of the first two lists. Return the head of the merged linked list.",
    difficulty: "Easy",
    sampleTestCases: [
      { input: "list1 = [1,2,4], list2 = [1,3,4]", output: "[1,1,2,3,4,4]" },
      { input: "list1 = [], list2 = []", output: "[]" },
    ],
    hiddenTestCases: [
      { input: "list1 = [], list2 = [0]", output: "[0]" },
      { input: "list1 = [1,3,5], list2 = [2,4,6]", output: "[1,2,3,4,5,6]" },
    ],
  },
  {
    title: "Longest Substring Without Repeating Characters",
    slug: "longest-substring-without-repeating-characters",
    description:
      "Given a string `s`, find the length of the longest substring without repeating characters.",
    difficulty: "Medium",
    sampleTestCases: [
      { input: 's = "abcabcbb"', output: "3" },
      { input: 's = "bbbbb"', output: "1" },
      { input: 's = "pwwkew"', output: "3" },
    ],
    hiddenTestCases: [
      { input: 's = ""', output: "0" },
      { input: 's = "dvdf"', output: "3" },
    ],
  },
];

const runSeed = async () => {
  await connectDB();
  try {
    await Problem.deleteMany({});
    console.log("Existing problems cleared.");

    await Problem.insertMany(problems);
    console.log(`${problems.length} problems inserted successfully.`);
  } catch (error) {
    console.error("Seeding failed:", error.message);
  } finally {
    mongoose.connection.close();
  }
};

runSeed();