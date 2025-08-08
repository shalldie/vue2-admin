import fs from 'fs';
import path from 'path';
import http from 'http';
import { createRequire } from 'module';
import { PluginOption, ViteDevServer } from 'vite';

const require = createRequire(import.meta.url);
const API_PREFIX = '/api';

function randomSleep() {
    return new Promise(resolve => {
        setTimeout(resolve, Math.random() * 800 + 200);
    });
}

export function vitePluginMock(): PluginOption {
    return {
        name: 'vite-plugin-mock',
        apply: 'serve',
        configureServer(server: ViteDevServer) {
            server.middlewares.use(async (req: http.IncomingMessage, res: http.ServerResponse, next: Function) => {
                try {
                    if (!req.url?.startsWith(API_PREFIX)) {
                        next();
                        return;
                    }

                    const relativePath = req.url!.replace(/\?.*/, '').replace(API_PREFIX, '.');
                    const mockPath = path.join(__dirname, relativePath + '.cjs');

                    if (!fs.existsSync(mockPath)) {
                        next();
                        return;
                    }

                    try {
                        delete require.cache[mockPath];
                        const mockModule = require(mockPath);

                        let mockData = mockModule;

                        if (typeof mockModule === 'function') {
                            mockData = mockModule();
                        }

                        // 模拟延时 200ms ~ 1000ms
                        await randomSleep();

                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify(mockData));
                    } catch (moduleError) {
                        next();
                    }
                } catch (error) {
                    next();
                }
            });
        }
    };
}
