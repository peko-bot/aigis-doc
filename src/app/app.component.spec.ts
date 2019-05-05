import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import template from '../assets/json/template.json';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('template should be parsed correctly', () => {
    expect(template).toEqual({
      config: { id: '0', category: '0' },
      data: {
        中文名: ['QB', '九尾'],
        日文名: ['帝国妖狐 キュウビ'],
        入手方式: ['帝国限定卡池'],
        被动技能: {
          觉醒前: [
            '九尾の狐：自身 cost + 1，攻击与防御提升 10%，魔抗 +10（已经显示在面板）',
          ],
          觉醒后: [
            '白き守護霊獣：自身 cost + 1，攻击与防御提升 10%，魔抗 +10（已经显示在面板）。配置中，帝国出身单位死亡算撤退',
          ],
        },
        主动技能: {
          觉醒前: ['todo'],
          觉醒后: [
            '妖狐覚醒： 最大 30 秒攻击力、防御、HP2 倍',
            '初动 1 秒，再动 22 秒',
          ],
          技觉后: [
            '初动 5 秒，再动 40 秒',
            '一尾の解放（技觉后，第一次发动）：最大攻击、防御、HP 永续上升 1.2 倍。技能结束后当前血量减半，技能强化',
            '三尾の解放（技觉后，第二次发动）：最大攻击、防御、HP 永续上升 1.9 倍。技能结束后当前血量减半，技能强化',
            '五尾の解放（技觉后，第三次发动）：最大攻击、防御、HP 永续上升 2.6 倍。技能结束后当前血量减半，技能强化',
            '七尾の解放（技觉后，第四次发动）：最大攻击、防御、HP 永续上升 3.3 倍。技能结束后当前血量减半，技能强化',
            '九尾の解放（技觉后，第五次发动）：最大攻击、防御、HP 永续上升 4 倍。技能结束后当前血量减半，该技能只能使用一次',
          ],
        },
      },
    });
  });
});
