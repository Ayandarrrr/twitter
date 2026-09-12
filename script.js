/* ====== AUTH GUARD ====== */
const currentUser = JSON.parse(localStorage.getItem('ngaboUser'));
if (!currentUser) {
  window.location.href = 'login.html';
}

/* ====== AVATAR HELPER — real generated profile photos ====== */
function avatarUrl(seed) {
  return `https://i.pravatar.cc/150?u=${encodeURIComponent(seed)}`;
}

/* ====== SEED TWEETS — themed: styling, gospel, concert, football, Ngabo July 2026 ====== */
let tweets = JSON.parse(localStorage.getItem('ngaboTweets')) || [
  {
    id: 1,
    name: "Ngabo Official",
    handle: "@ngabo_music",
    avatar: "https://i.pravatar.cc/150?img=12",
    time: "Jul 3, 2026",
    text: "Excited to announce NGABO LIVE — July 25, 2026 🎤🙌 A night of pure worship. Tickets drop Friday! #NgaboLive2026",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    likes: 812, retweets: 340, liked: false, retweeted: false
  },
  {
    id: 2,
    name: "Style Daily",
    handle: "@styledaily",
    avatar: "https://i.pravatar.cc/150?img=32",
    time: "Jul 4, 2026",
    text: "Streetwear is going full gospel-core this winter ✨ Oversized fits, earthy tones, statement caps. #StreetwearSZN",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
    likes: 245, retweets: 88, liked: false, retweeted: false
  },
  {
    id: 3,
    name: "SA Football Central",
    handle: "@safootballcentral",
    avatar: "https://i.pravatar.cc/150?img=51",
    time: "Jul 5, 2026",
    text: "DERBY DAY is set for July 12! Both sides are unbeaten in their last 5 — this one's going to be spicy 🔥 #DerbyDay",
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80",
    likes: 1204, retweets: 590, liked: false, retweeted: false
  },
  {
    id: 4,
    name: "Worship Night SA",
    handle: "@worshipnightSA",
    avatar: "https://i.pravatar.cc/150?img=45",
    time: "Jul 6, 2026",
    text: "Rehearsals for Ngabo's July concert are sounding INSANE 😭🙏 can't wait for July 25th. Who else got their tickets?",
    image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=800&q=80",
    likes: 156, retweets: 40, liked: false, retweeted: false
  },
  {
    id: 5,
    name: "Ngabo Official",
    handle: "@ngabo_music",
    avatar: "https://i.pravatar.cc/150?img=12",
    time: "Jul 8, 2026",
    text: "Merch for Ngabo Live drops next week 👕 Limited streetwear collab pieces — designed for the fam that raised their hands with me.",
    image: "",
    likes: 670, retweets: 210, liked: false, retweeted: false
  }
];

function saveTweets() {
  localStorage.setItem('ngaboTweets', JSON.stringify(tweets));
}

/* ====== ICON SNIPPETS (reused inline) ====== */
const replyIcon = '<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';
const retweetIcon = '<svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>';
const heartIcon = '<svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>';
const shareIcon = '<svg viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>';

/* ====== RENDER FEED (accepts an optional filtered list) ====== */
function renderFeed(list = tweets) {
  const feed = document.getElementById('feed');
  feed.innerHTML = '';

  if (list.length === 0) {
    feed.innerHTML = `<div style="padding:40px 16px; text-align:center; color:var(--text-secondary);">No tweets match that search.</div>`;
    return;
  }

  list.forEach(tweet => {
    const el = document.createElement('div');
    el.className = 'tweet';
    el.innerHTML = `
      <img class="avatar" src="${tweet.avatar}" alt="${escapeHtml(tweet.name)}">
      <div class="tweet-body">
        <div class="tweet-head">
          <span class="tweet-name">${escapeHtml(tweet.name)}</span>
          <span class="tweet-handle">${escapeHtml(tweet.handle)}</span>
          <span class="tweet-handle">·</span>
          <span class="tweet-time">${escapeHtml(tweet.time)}</span>
        </div>
        <div class="tweet-text">${formatText(tweet.text)}</div>
        ${tweet.image ? `<img class="tweet-image" src="${tweet.image}" alt="tweet image">` : ''}
        <div class="tweet-actions">
          <div class="tweet-action" data-action="reply" data-id="${tweet.id}">${replyIcon}<span>${tweet.replies || 0}</span></div>
          <div class="tweet-action ${tweet.retweeted ? 'retweeted' : ''}" data-action="retweet" data-id="${tweet.id}">${retweetIcon}<span>${tweet.retweets}</span></div>
          <div class="tweet-action ${tweet.liked ? 'liked' : ''}" data-action="like" data-id="${tweet.id}">${heartIcon}<span>${tweet.likes}</span></div>
          <div class="tweet-action" data-action="share" data-id="${tweet.id}">${shareIcon}</div>
        </div>
      </div>
    `;
    feed.appendChild(el);
  });

  document.querySelectorAll('.tweet-action').forEach(btn => {
    btn.addEventListener('click', () => handleTweetAction(btn.dataset.action, parseInt(btn.dataset.id)));
  });
}

function formatText(text) {
  return escapeHtml(text).replace(/#(\w+)/g, '<span class="tweet-tag">#$1</span>');
}
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function handleTweetAction(action, id) {
  const tweet = tweets.find(t => t.id === id);
  if (!tweet) return;
  if (action === 'like') {
    tweet.liked = !tweet.liked;
    tweet.likes += tweet.liked ? 1 : -1;
  }
  if (action === 'retweet') {
    tweet.retweeted = !tweet.retweeted;
    tweet.retweets += tweet.retweeted ? 1 : -1;
  }
  if (action === 'reply') {
    tweet.replies = (tweet.replies || 0) + 1;
  }
  if (action === 'share') {
    alert('Link copied! (demo)');
  }
  saveTweets();
  renderFeed();
}

/* ====== POST NEW TWEET (inline box) ====== */
function postNewTweet(text) {
  if (!text.trim()) return;
  const newTweet = {
    id: Date.now(),
    name: currentUser.username,
    handle: '@' + currentUser.username.toLowerCase().replace(/\s+/g, ''),
    avatar: avatarUrl(currentUser.username),
    time: 'Just now',
    text: text.trim(),
    image: "",
    likes: 0, retweets: 0, replies: 0,
    liked: false, retweeted: false
  };
  tweets.unshift(newTweet);
  saveTweets();
  renderFeed();
}

document.getElementById('postTweetBtn').addEventListener('click', () => {
  const box = document.getElementById('tweetText');
  postNewTweet(box.value);
  box.value = '';
});

/* ====== COMPOSE MODAL (Cursor feature) ====== */
const overlay = document.getElementById('composeModalOverlay');
document.getElementById('openComposeModal').addEventListener('click', () => overlay.classList.add('open'));
document.getElementById('closeComposeModal').addEventListener('click', () => overlay.classList.remove('open'));
overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('open'); });

const modalTextarea = document.getElementById('modalTweetText');
modalTextarea.addEventListener('input', () => {
  document.getElementById('charCount').textContent = 280 - modalTextarea.value.length;
});
document.getElementById('modalPostBtn').addEventListener('click', () => {
  postNewTweet(modalTextarea.value);
  modalTextarea.value = '';
  document.getElementById('charCount').textContent = 280;
  overlay.classList.remove('open');
});

/* ====== DARK / LIGHT MODE (manual feature — no Cursor) ====== */
const sunSVG = '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
const moonSVG = '<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  document.getElementById('themeToggleIcon').innerHTML = theme === 'dark' ? sunSVG : moonSVG;
  document.getElementById('themeToggleLabel').textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
  localStorage.setItem('theme', theme);
}
const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

document.getElementById('themeToggle').addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

/* ====== USER DISPLAY (real avatar image, not initials) ====== */
document.getElementById('userNameDisplay').textContent = currentUser.username;
document.getElementById('userHandleDisplay').textContent = '@' + currentUser.username.toLowerCase().replace(/\s+/g, '');
const myAvatar = avatarUrl(currentUser.username);
document.getElementById('userAvatarImg').src = myAvatar;
document.getElementById('composeAvatarImg').src = myAvatar;
document.getElementById('modalAvatarImg').src = myAvatar;

/* ====== NAV ITEM SWITCHING (feels functional) ====== */
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    const label = item.querySelector('.label').textContent;
    document.querySelector('.timeline-header').textContent = label;

    if (label === 'Football') {
      renderFeed(tweets.filter(t => /football|derby|⚽/i.test(t.text) || t.handle.includes('football')));
    } else if (label === 'Gospel') {
      renderFeed(tweets.filter(t => /gospel|worship|ngabo|concert/i.test(t.text)));
    } else {
      renderFeed(tweets);
    }
  });
});

/* ====== SEARCH BAR (actually filters) ====== */
document.querySelector('.search-box').outerHTML = `
  <div class="search-box">
    <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
    <input id="searchInput" type="text" placeholder="Search Ngabo, gospel, football..." style="background:transparent;border:none;outline:none;color:var(--text-primary);width:100%;font-size:15px;">
  </div>
`;
document.getElementById('searchInput').addEventListener('input', e => {
  const q = e.target.value.toLowerCase();
  const filtered = tweets.filter(t =>
    t.text.toLowerCase().includes(q) ||
    t.name.toLowerCase().includes(q) ||
    t.handle.toLowerCase().includes(q)
  );
  renderFeed(filtered);
});

/* ====== INITIAL RENDER ====== */
renderFeed();