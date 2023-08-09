/**
 * idからゴルフクラブ名を取得
 */
export function idToClub(id: string) {
  switch (id) {
    case '1':
      return 'ドライバー';
    case '2':
      return '3番ウッド';
    case '3':
      return '5番ウッド';
    case '4':
      return '3番ユーティリティ';
    case '5':
      return '4番ユーティリティ';
    case '6':
      return '5番ユーティリティ';
    case '7':
      return '3番アイアン';
    case '8':
      return '4番アイアン';
    case '9':
      return '5番アイアン';
    case '10':
      return '6番アイアン';
    case '11':
      return '7番アイアン';
    case '12':
      return '8番アイアン';
    case '13':
      return '9番アイアン';
    case '14':
      return 'ピッチングウェッジ';
    case '15':
      return 'サンドウェッジ';
    case '16':
      return 'ギャップウェッジ';
    case '17':
      return 'ロブウェッジ';
    default:
      return '-';
  }
}
