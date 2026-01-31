<template>
  <div id="server-status-card" class="ssc-container ssc-online" style="display: block;">
    <div class="ssc-header-row">
      <div class="ssc-icon-wrapper">
        <img src="data:image/png;base64,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" alt="Icon" id="ssc-server-icon" onerror="this.src='https://ui-avatars.com/api/?name=MC&amp;background=eee&amp;color=999'">
        <div class="ssc-status-indicator" id="ssc-status-dot"></div>
      </div>
      <div class="ssc-main-info">
        <div class="ssc-title-row">
          <h3 class="ssc-hostname" id="ssc-host-title">服务器状态</h3>
          <span class="ssc-badge" id="ssc-status-badge">在线</span>
        </div>
      </div>
      <div class="ssc-ip-row" @click="copyServerIp()" title="点击复制 IP">
        <svg class="ssc-svg-icon" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
        <span id="ssc-display-ip" :data-copy-value="fullAddress">{{ fullAddress }}</span>
        <span class="ssc-copy-tip" id="ssc-copy-tip">点击复制</span>
      </div>
    </div>
    <div class="ssc-motd-box">
      <div class="ssc-motd-content" id="ssc-motd" v-html="motdHtml"></div>
    </div>
    <div class="ssc-stats-grid">
      <div class="ssc-stat">
        <span class="ssc-stat-label">
          <svg class="ssc-svg-icon" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          版本
        </span>
        <span class="ssc-stat-value" id="ssc-version">{{ version }}</span>
      </div>
      <div class="ssc-stat">
        <span class="ssc-stat-label">
          <svg class="ssc-svg-icon" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20v-12"></path><path d="M22 20v-16"></path></svg>
          延迟
        </span>
        <span class="ssc-stat-value" :class="pingClass" id="ssc-delay">{{ delay }}ms</span>
      </div>
      <div class="ssc-stat ssc-stat-players">
        <div class="ssc-flex-between">
          <span class="ssc-stat-label">
            <svg class="ssc-svg-icon" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            在线人数
          </span>
          <span class="ssc-stat-value" id="ssc-players">{{ online }} / {{ max }}</span>
        </div>
        <div class="ssc-progress-track">
          <div class="ssc-progress-fill" id="ssc-progress" :style="{ width: progressWidth + '%' }"></div>
        </div>
      </div>
      <div class="ssc-credit-row">
        API by <a href="https://motd.minebbs.com" target="_blank" rel="noopener">motd.minebbs.com</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServerStatusCard',
  data() {
    return {
      fullAddress: 'mc.onekrincraft.cn:25565',
      motdHtml: '<span class="mc-bold"><span class="mc-yellow">K</span><span class="mc-#FFF955">r</span><span class="mc-#FFF455">i</span><span class="mc-#FFEE55">n</span><span class="mc-#FFE855">C</span><span class="mc-#FFE355">r</span><span class="mc-#FFDD55">a</span><span class="mc-#FFD755">f</span><span class="mc-#FFD255">t</span><span class="mc-#FFCC55"> </span><span class="mc-#FFC655">|</span><span class="mc-#FFC155"> </span><span class="mc-#FFBB55">1</span><span class="mc-#FFB555">.</span><span class="mc-#FFB055">8</span><span class="mc-#FFAA55">-</span><span class="mc-#FFA455">1</span><span class="mc-#FF9F55">.</span><span class="mc-#FF9955">2</span><span class="mc-#FF9355">1</span><span class="mc-#FF8E55">.</span><span class="mc-#FF8855">1</span><span class="mc-#FF8255">1</span><span class="mc-#FF7D55"> </span><span class="mc-#FF7755">|</span><span class="mc-#FF7155"> </span><span class="mc-#FF6C55">持</span><span class="mc-#FF6655">续</span><span class="mc-#FF6055">更</span><span class="mc-#FF5B55">新</span><span class="mc-red">！</span></span><br><span class="mc-italic mc-underline"><span class="mc-green">为</span><span class="mc-#66EE55">完</span><span class="mc-#77DD55">善</span><span class="mc-#88CC55">服</span><span class="mc-#99BB55">务</span><span class="mc-#AAAA55">器</span><span class="mc-#BB9955">而</span><span class="mc-#CC8855">努</span><span class="mc-#DD7755">力</span><span class="mc-#EE6655">着</span><span class="mc-red">！</span></span>',
      version: 'Velocity 1.7.2-1.21.11',
      delay: 167,
      online: 8,
      max: 2025,
      progressWidth: 0.395062,
      pingClass: 'ping-fair'
    }
  },
  mounted() {
    this.fetchServerStatus();
    // 从页面元素获取IP和端口
    const ipEl = document.querySelector('[data-field="server_ip"] dd');
    const portEl = document.querySelector('[data-field="server_port"] dd');
    if (ipEl && ipEl.innerText.trim()) {
      const rawIp = ipEl.innerText.trim();
      const rawPort = portEl ? portEl.innerText.trim() : '';
      this.fullAddress = rawIp + (rawPort ? ':' + rawPort : '');
    }
  },
  methods: {
    copyServerIp() {
      const textToCopy = this.fullAddress;
      const tipEl = document.getElementById('ssc-copy-tip');
      
      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = tipEl.innerText;
        tipEl.innerText = "已复制!";
        tipEl.style.color = "#2ecc71";
        setTimeout(() => {
          tipEl.innerText = "点击复制";
          tipEl.style.color = "";
        }, 2000);
      }).catch(err => {
        console.error('复制失败', err);
        tipEl.innerText = "复制失败";
      });
    },
    fetchServerStatus() {
      const rawIp = 'mc.onekrincraft.cn';
      const rawPort = '25565';
      const apiUrl = `https://motd.minebbs.com/api/status?ip=${rawIp}&port=${rawPort}&stype=auto`;
      
      fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
          const container = document.getElementById('server-status-card');
          const isOnline = data.status === 'online';
          
          if (isOnline) {
            container.classList.add('ssc-online');
            container.classList.remove('ssc-offline');
            document.getElementById('ssc-status-badge').innerText = '在线';
            
            // 更新MOTD
            if (typeof data.motd === 'object') {
              this.motdHtml = this.renderMotdComponent(data.motd);
            } else if (typeof data.motd === 'string') {
              this.motdHtml = '<span>' + this.parseLegacyColors(data.motd) + '</span>';
            } else {
              this.motdHtml = data.pureMotd || '无标语';
            }
            
            // 更新服务器图标
            if (data.icon && (data.icon.startsWith('http') || data.icon.startsWith('data:image'))) {
              document.getElementById('ssc-server-icon').src = data.icon;
            }
            
            // 更新版本
            this.version = (data.version || '未知').replace(/git-|Spigot-|Paper-/g, '');
            
            // 更新延迟
            const delay = data.delay || 0;
            this.delay = delay;
            if (delay < 100) this.pingClass = 'ping-good';
            else if (delay < 300) this.pingClass = 'ping-fair';
            else this.pingClass = 'ping-bad';
            
            // 更新在线人数
            const online = parseInt(data.players.online || 0);
            const max = parseInt(data.players.max || 0);
            this.online = online;
            this.max = max;
            this.progressWidth = max > 0 ? Math.min((online / max) * 100, 100) : 0;
          } else {
            container.classList.add('ssc-offline');
            container.classList.remove('ssc-online');
            document.getElementById('ssc-status-badge').innerText = '离线';
            this.motdHtml = '无法连接到服务器';
            document.getElementById('ssc-server-icon').style.filter = 'grayscale(100%)';
          }
        })
        .catch(err => {
          console.error('Status Error:', err);
          document.getElementById('ssc-status-badge').innerText = 'API 错误';
        });
    },
    renderMotdComponent(component) {
      if (typeof component === 'string') return component.replace(/\n/g, '<br>');
      let html = '';
      let classes = [];
      if (component.color) classes.push('mc-' + component.color);
      if (component.bold) classes.push('mc-bold');
      if (component.italic) classes.push('mc-italic');
      if (component.underlined) classes.push('mc-underline');
      if (component.strikethrough) classes.push('mc-strikethrough');
      const classAttr = classes.length > 0 ? ` class="${classes.join(' ')}"` : '';
      if (component.text) {
        html += component.text.replace(/\n/g, '<br>');
      }
      if (component.extra && Array.isArray(component.extra)) {
        component.extra.forEach(sub => html += this.renderMotdComponent(sub));
      }
      return classes.length > 0 ? `<span ${classAttr}>${html}</span>` : html;
    },
    parseLegacyColors(text) {
      if (!text) return '';
      const safeText = text;
      const parts = safeText.split('§');
      let html = '';
      let currentClasses = new Set();
      let currentColorClass = null;
      const colorMap = {
        '0': 'mc-black', '1': 'mc-dark_blue', '2': 'mc-dark_green', '3': 'mc-dark_aqua',
        '4': 'mc-dark_red', '5': 'mc-dark_purple', '6': 'mc-gold', '7': 'mc-gray',
        '8': 'mc-dark_gray', '9': 'mc-blue', 'a': 'mc-green', 'b': 'mc-aqua',
        'c': 'mc-red', 'd': 'mc-light_purple', 'e': 'mc-yellow', 'f': 'mc-white'
      };
      const styleMap = {
        'l': 'mc-bold', 'm': 'mc-strikethrough', 'n': 'mc-underline', 'o': 'mc-italic',
        'k': 'mc-obfuscated',
        'r': 'reset'
      };
      if (parts[0]) {
        html += `<span>${parts[0]}</span>`;
      }
      for (let i = 1; i < parts.length; i++) {
        const part = parts[i];
        if (!part) continue;
        const code = part.charAt(0).toLowerCase();
        const content = part.slice(1);
        if (colorMap[code]) {
          currentColorClass = colorMap[code];
          currentClasses.clear();
        } else if (styleMap[code] === 'reset') {
          currentColorClass = null;
          currentClasses.clear();
        } else if (styleMap[code]) {
          currentClasses.add(styleMap[code]);
        }
        if (content) {
          const classes = [];
          if (currentColorClass) classes.push(currentColorClass);
          currentClasses.forEach(c => classes.push(c));
          if (classes.length > 0) {
            html += `<span class="${classes.join(' ')}">${content}</span>`;
          } else {
            html += `<span>${content}</span>`;
          }
        }
      }
      return html;
    }
  }
}
</script>

<style scoped>
/* 在这里复制所有的CSS样式 */
#server-status-card { 
    font-family: 'Segoe UI', 'Microsoft YaHei', sans-serif; 
    background: var(--vp-c-bg); 
    color: var(--vp-c-text-1); 
    border: 1px solid var(--vp-c-border); 
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05); 
    border-radius: 10px; 
    padding: 20px; 
    max-width: 600px; 
    width: 100%; 
    margin: 20px auto; 
    box-sizing: border-box; 
    transition: all 0.3s ease; 
    position: relative; 
    overflow: hidden; 
    line-height: 1.5; 
}

@media (prefers-color-scheme: dark) { 
    #server-status-card { 
        box-shadow: none !important; 
        border: 1px solid rgba(255, 255, 255, 0.15) !important; 
        background: var(--vp-c-bg-alt) !important; 
    } 
}

[data-theme="dark"] #server-status-card, 
.theme--dark #server-status-card, 
html[style*="color-scheme: dark"] #server-status-card { 
    box-shadow: none !important; 
    border: 1px solid rgba(255, 255, 255, 0.15) !important; 
    background: var(--vp-c-bg-alt) !important; 
}

#server-status-card .ssc-svg-icon { 
    display: inline-block; 
    vertical-align: middle; 
    margin-right: 4px; 
    opacity: 0.7; 
} 

#server-status-card .ssc-header-row { 
    display: flex; 
    align-items: center; 
    gap: 15px; 
    margin-bottom: 15px; 
}

#server-status-card .ssc-icon-wrapper { 
    position: relative; 
    width: 64px; 
    height: 64px; 
    flex-shrink: 0; 
} 

#server-status-card #ssc-server-icon { 
    width: 100%; 
    height: 100%; 
    border-radius: 12px; 
    object-fit: cover; 
    background: var(--vp-c-border); 
    border: none; 
    padding: 0; 
    margin: 0; 
} 

#server-status-card .ssc-status-indicator { 
    position: absolute; 
    bottom: -2px; 
    right: -2px; 
    width: 14px; 
    height: 14px; 
    border-radius: 50%; 
    border: 3px solid var(--vp-c-bg); 
    background-color: #ccc; 
    box-sizing: content-box; 
} 

@media (prefers-color-scheme: dark) { 
    #server-status-card .ssc-status-indicator { border-color: var(--vp-c-bg-alt); } 
} 

[data-theme="dark"] #server-status-card .ssc-status-indicator { 
    border-color: var(--vp-c-bg-alt); 
} 

#server-status-card.ssc-online .ssc-status-indicator { 
    background-color: #2ecc71; 
    box-shadow: 0 0 8px rgba(46,204,113,0.5); 
} 

#server-status-card.ssc-offline .ssc-status-indicator { 
    background-color: #e74c3c; 
} 

#server-status-card .ssc-main-info { 
    flex-grow: 1; 
    overflow: hidden; 
} 

#server-status-card .ssc-title-row { 
    display: flex; 
    align-items: center; 
    gap: 10px; 
    margin-bottom: 6px; 
    flex-wrap: wrap; 
} 

#server-status-card .ssc-hostname { 
    font-size: 1.2rem; 
    font-weight: 700; 
    margin: 0; 
    padding: 0; 
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis; 
    color: inherit; 
} 

#server-status-card .ssc-badge { 
    font-size: 0.75rem; 
    padding: 2px 8px; 
    border-radius: 4px; 
    background: var(--vp-c-border); 
    color: var(--vp-c-text-2); 
    font-weight: 600; 
    line-height: normal; 
} 

#server-status-card.ssc-online .ssc-badge { 
    background: rgba(46, 204, 113, 0.15); 
    color: #27ae60; 
} 

#server-status-card.ssc-offline .ssc-badge { 
    background: rgba(231, 76, 60, 0.15); 
    color: #c0392b; 
} 

#server-status-card .ssc-ip-row { 
    display: inline-flex; 
    align-items: center; 
    gap: 4px; 
    background: var(--vp-c-mute); 
    padding: 4px 10px; 
    border-radius: 6px; 
    font-size: 0.9rem; 
    color: var(--vp-c-text-2); 
    cursor: pointer; 
    transition: background 0.2s; 
    user-select: none; 
} 

#server-status-card .ssc-ip-row:hover { 
    background: var(--vp-c-border); 
    color: var(--vp-c-text-1); 
} 

@media (prefers-color-scheme: dark) { 
    #server-status-card .ssc-ip-row:hover { 
        color: #ddd; 
        background: rgba(255,255,255,0.1); 
    } 
} 

[data-theme="dark"] #server-status-card .ssc-ip-row:hover { 
    color: #ddd; 
    background: rgba(255,255,255,0.1); 
} 

#server-status-card .ssc-ip-row:active { 
    transform: scale(0.98); 
} 

#server-status-card .ssc-copy-tip { 
    font-size: 0.75rem; 
    opacity: 0.6; 
    margin-left: 5px; 
} 

#server-status-card .ssc-motd-box { 
    background: #212121 !important; 
    border-radius: 8px; 
    padding: 12px; 
    margin-bottom: 15px; 
    border-left: 4px solid #888; 
    box-shadow: inset 0 0 10px rgba(0,0,0,0.3); 
} 

#server-status-card.ssc-online .ssc-motd-box { 
    border-left-color: #2ecc71; 
} 

#server-status-card.ssc-offline .ssc-motd-box { 
    border-left-color: #e74c3c; 
} 

#server-status-card .ssc-motd-content { 
    font-family: 'Minecraft', 'Menlo', monospace; 
    font-size: 0.9rem; 
    line-height: 1.4; 
    white-space: pre-wrap; 
    word-break: break-all; 
    color: #e0e0e0 !important; 
    text-shadow: 1px 1px 0 rgba(0,0,0,0.5); 
} 

#server-status-card .ssc-stats-grid { 
    display: grid; 
    grid-template-columns: 1fr 1fr 1.5fr; 
    gap: 15px; 
    border-top: 1px solid var(--vp-c-border); 
    padding-top: 15px; 
} 

@media (prefers-color-scheme: dark) { 
    #server-status-card .ssc-stats-grid { 
        border-top-color: rgba(255,255,255,0.1); 
    } 
} 

[data-theme="dark"] #server-status-card .ssc-stats-grid { 
    border-top-color: rgba(255,255,255,0.1); 
} 

#server-status-card .ssc-stat { 
    display: flex; 
    flex-direction: column; 
} 

#server-status-card .ssc-stat-label { 
    font-size: 0.75rem; 
    text-transform: uppercase; 
    color: var(--vp-c-text-2); 
    margin-bottom: 4px; 
    display: flex; 
    align-items: center; 
} 

#server-status-card .ssc-stat-value { 
    font-weight: 600; 
    font-size: 0.95rem; 
} 

#server-status-card .ssc-flex-between { 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
} 

#server-status-card .ssc-progress-track { 
    height: 6px; 
    background: var(--vp-c-border); 
    border-radius: 3px; 
    margin-top: 6px; 
    overflow: hidden; 
} 

@media (prefers-color-scheme: dark) { 
    #server-status-card .ssc-progress-track { 
        background: rgba(255,255,255,0.1); 
    } 
} 

[data-theme="dark"] #server-status-card .ssc-progress-track { 
    background: rgba(255,255,255,0.1); 
} 

#server-status-card .ssc-progress-fill { 
    height: 100%; 
    background: #3498db; 
    border-radius: 3px; 
    transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1); 
} 

#server-status-card .ssc-credit-row {
    text-align: right;
    font-size: 0.7rem;
    margin-top: 8px;
    color: var(--vp-c-text-2);
    opacity: 0.5;
}

#server-status-card .ssc-credit-row a {
    color: inherit;
    text-decoration: none;
}

#server-status-card .ssc-credit-row a:hover {
    text-decoration: underline;
}

#server-status-card .ping-good { 
    color: #2ecc71; 
} 

#server-status-card .ping-fair { 
    color: #f1c40f; 
} 

#server-status-card .ping-bad { 
    color: #e74c3c; 
} 

#server-status-card .mc-black { 
    color: #000000; 
    text-shadow: 0 0 2px #fff; 
} 

#server-status-card .mc-dark_blue { 
    color: #0000AA; 
} 

#server-status-card .mc-dark_green { 
    color: #00AA00; 
} 

#server-status-card .mc-dark_aqua { 
    color: #00AAAA; 
} 

#server-status-card .mc-dark_red { 
    color: #AA0000; 
} 

#server-status-card .mc-dark_purple { 
    color: #AA00AA; 
} 

#server-status-card .mc-gold { 
    color: #FFAA00; 
} 

#server-status-card .mc-gray { 
    color: #AAAAAA; 
} 

#server-status-card .mc-dark_gray { 
    color: #555555; 
} 

#server-status-card .mc-blue { 
    color: #5555FF; 
} 

#server-status-card .mc-green { 
    color: #55FF55; 
} 

#server-status-card .mc-aqua { 
    color: #55FFFF; 
} 

#server-status-card .mc-red { 
    color: #FF5555; 
} 

#server-status-card .mc-light_purple { 
    color: #FF55FF; 
} 

#server-status-card .mc-yellow { 
    color: #FFFF55; 
} 

#server-status-card .mc-white { 
    color: #FFFFFF; 
    text-shadow: none; 
} 

#server-status-card .mc-bold { 
    font-weight: bold; 
} 

#server-status-card .mc-italic { 
    font-style: italic; 
} 

#server-status-card .mc-strikethrough { 
    text-decoration: line-through; 
} 

#server-status-card .mc-underline { 
    text-decoration: underline; 
} 

#server-status-card .mc-obfuscated { 
    display: inline-block; 
    background-color: rgba(255, 255, 255, 0.2); 
    color: transparent; 
    text-shadow: none; 
    border-radius: 2px; 
    animation: ssc-magic-blink 0.1s infinite; 
    vertical-align: middle; 
    color: inherit; 
    filter: blur(2px); 
    user-select: none; 
} 

@keyframes ssc-magic-blink { 
    0% { 
        opacity: 0.8; 
        transform: scaleY(0.9); 
    } 
    50% { 
        opacity: 1; 
        transform: scaleY(1.1); 
    } 
    100% { 
        opacity: 0.8; 
        transform: scaleY(0.9); 
    } 
} 

@media (max-width: 500px) { 
    #server-status-card .ssc-stats-grid { 
        grid-template-columns: 1fr 1fr; 
    } 
    
    #server-status-card .ssc-stat-players { 
        grid-column: span 2; 
    } 
    
    #server-status-card .ssc-header-row { 
        flex-direction: column; 
        text-align: center; 
    } 
    
    #server-status-card .ssc-title-row { 
        justify-content: center; 
    } 
}
</style>