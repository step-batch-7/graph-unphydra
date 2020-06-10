//Example
// Pairs => [[from,to],[to,from]]
// Source => from
// To => to
// Should return true.

const bfs = function (pairs, source, target) {
  const visitedNodes = [source];
  const queue = [source];
  while (queue.length > 0) {
    const node = queue.shift();
    let isTarget = false;
    const childNodes = pairs.reduce((result, [from, to]) => {
      if (from === node) {
        if (to === target) {
          isTarget = true;
        }
        if (!visitedNodes.includes(to)) {
          visitedNodes.push(to);
          result.push(to);
        }
      }
      return result;
    }, []);
    if (isTarget) return true;
    queue.push(...childNodes);
  }
  return false;
};

module.exports = { bfs };
