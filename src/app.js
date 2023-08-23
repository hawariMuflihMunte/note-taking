import Header from './components/header';
import Nav from './components/nav';

export default function App() {
  const doc_ = window.document;

  const [
    header,
    nav
  ] = [
    Header(),
    Nav()
  ];
}
