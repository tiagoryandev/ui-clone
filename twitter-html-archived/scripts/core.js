import tweets from "../assets/tweets.json" assert { type: "json" };

class TwitterCore {
  constructor() {
    this.#loadTweets();
    this.#interactionTweetTextarea();
  }

  #interactionTweetTextarea() {
    const tweetTextarea = document.getElementById("tweet-textarea");

    tweetTextarea.addEventListener("input", event => {
      tweetTextarea.style.height = "auto";
      tweetTextarea.style.height = event.target.scrollHeight + "px";
    });
  }

  #loadTweets() {
    const screenTweets = document.getElementById("screen-tweets");

    const baseTweet = ({ username, fullName, avatarURL, content }) => {
      return `<div class="w-full border-b-2 border-slate-800">
      <div class="p-5 flex gap-4">
        <div class="shrink-0 w-12 h-12 bg-cover bg-[url(${avatarURL})] rounded-full"></div>
        <div>
          <h2 class="text-md font-medium text-blue-100">${fullName}<span
              class="mx-2 text-zinc-500 font-normal">${username} · 1 h</span></h2>
          <p class="text-zinc-200">${content}</p>
          <div class="mt-2 flex gap-14">
            <p class="flex items-center gap-1 text-sm text-blue-300 hover:text-blue-100 select-none cursor-pointer"><i class="text-lg ph-chart-line-up-light"></i> ${Math.floor(Math.random() * 10)} mil</p>
            <p class="flex items-center gap-1 text-sm text-blue-300 hover:text-blue-100 select-none cursor-pointer"><i class="text-lg ph-heart-light"></i> ${Math.floor(Math.random() * 1000)}</p>
            <p class="flex items-center gap-1 text-sm text-blue-300 hover:text-blue-100 select-none cursor-pointer"><i class="text-lg  ph-chat-circle-dots-light"></i> ${Math.floor(Math.random() * 350)}</p>
            <p class="flex items-center gap-1 text-sm text-blue-300 hover:text-blue-100 select-none cursor-pointer"><i class="text-lg  ph-repeat-light"></i> ${Math.floor(Math.random() * 550)}</p>
            <p class="flex items-center gap-1 text-sm text-blue-300 hover:text-blue-100 select-none cursor-pointer"><i class="text-lg ph-upload-simple-light"></i></p>
          </div>
        </div>
      </div>
    </div>`
    };

    tweets.forEach(tweet => {
      screenTweets.innerHTML += baseTweet(tweet);
    });
  }
};

new TwitterCore();