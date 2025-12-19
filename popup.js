// DeepSeek API配置
const API_URL = 'https://api.deepseek.com/chat/completions';
const API_KEY_STORAGE_KEY = 'deepseek_api_key';

// 获取DOM元素
const inputTextarea = document.getElementById('input');
const outputTextarea = document.getElementById('output');
const translateBtn = document.getElementById('translateBtn');
const loadingDiv = document.getElementById('loading');
const apiKeyInput = document.getElementById('apiKeyInput');
const saveApiKeyBtn = document.getElementById('saveApiKeyBtn');
const saveStatus = document.getElementById('saveStatus');
const apiKeySection = document.getElementById('apiKeySection');
const toggleApiKeyBtn = document.getElementById('toggleApiKeyBtn');

// 获取保存的API Key
function getApiKey() {
    return localStorage.getItem(API_KEY_STORAGE_KEY) || '';
}

// 保存API Key
function saveApiKey(apiKey) {
    localStorage.setItem(API_KEY_STORAGE_KEY, apiKey);
}

// 显示保存状态
function showSaveStatus(message, isError = false) {
    saveStatus.textContent = message;
    saveStatus.style.color = isError ? '#f44336' : '#4CAF50';
    
    // 3秒后隐藏状态
    setTimeout(() => {
        saveStatus.textContent = '';
    }, 3000);
}

// 翻译函数
async function translateText(text) {
    try {
        // 获取API Key
        const apiKey = getApiKey();
        if (!apiKey) {
            outputTextarea.value = '请先在下方设置API Key';
            return;
        }
        
        // 显示加载状态
        loadingDiv.style.display = 'block';
        translateBtn.disabled = true;
        
        // 构造请求体
        const requestBody = {
            model: 'deepseek-chat',
            messages: [
                { role: 'system', content: 'You are a helpful assistant. Please translate the following Chinese text to English.' },
                { role: 'user', content: text }
            ],
            stream: false
        };
        
        // 发送请求
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify(requestBody)
        });
        
        if (!response.ok) {
            throw new Error(`API请求失败: ${response.status} ${response.statusText}`);
        }
        
        // 解析响应
        const data = await response.json();
        
        // 提取翻译结果
        const translation = data.choices[0].message.content;
        
        // 显示翻译结果
        outputTextarea.value = translation;
        
    } catch (error) {
        console.error('翻译错误:', error);
        outputTextarea.value = `翻译失败: ${error.message}`;
    } finally {
        // 隐藏加载状态
        loadingDiv.style.display = 'none';
        translateBtn.disabled = false;
    }
}

// 事件监听
function setupEventListeners() {
    // 翻译按钮点击事件
    translateBtn.addEventListener('click', () => {
        const text = inputTextarea.value.trim();
        if (text) {
            translateText(text);
        } else {
            outputTextarea.value = '请输入要翻译的文本';
        }
    });
    
    // 回车键翻译功能（Ctrl+Enter或Cmd+Enter）
    inputTextarea.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            const text = inputTextarea.value.trim();
            if (text) {
                translateText(text);
            }
        }
    });
    
    // 切换API Key设置界面显示/隐藏
    toggleApiKeyBtn.addEventListener('click', () => {
        if (apiKeySection.style.display === 'none') {
            apiKeySection.style.display = 'block';
            toggleApiKeyBtn.textContent = '隐藏API Key设置';
        } else {
            apiKeySection.style.display = 'none';
            toggleApiKeyBtn.textContent = '设置API Key';
        }
    });
    
    // 保存API Key按钮点击事件
    saveApiKeyBtn.addEventListener('click', () => {
        const apiKey = apiKeyInput.value.trim();
        if (apiKey) {
            saveApiKey(apiKey);
            showSaveStatus('API Key已保存');
            // 保存成功后隐藏API Key设置界面
            setTimeout(() => {
                apiKeySection.style.display = 'none';
                toggleApiKeyBtn.textContent = '设置API Key';
            }, 1500);
        } else {
            showSaveStatus('API Key不能为空', true);
        }
    });
    
    // API Key输入框回车键保存
    apiKeyInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const apiKey = apiKeyInput.value.trim();
            if (apiKey) {
                saveApiKey(apiKey);
                showSaveStatus('API Key已保存');
                // 保存成功后隐藏API Key设置界面
                setTimeout(() => {
                    apiKeySection.style.display = 'none';
                    toggleApiKeyBtn.textContent = '设置API Key';
                }, 1500);
            } else {
                showSaveStatus('API Key不能为空', true);
            }
        }
    });
}

// 初始化
function init() {
    // 加载保存的API Key到输入框
    const savedApiKey = getApiKey();
    if (savedApiKey) {
        apiKeyInput.value = savedApiKey;
    }
    
    // 设置事件监听
    setupEventListeners();
}

// 启动应用
init();