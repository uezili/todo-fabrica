import { SignalBarsHight } from './components/IconsComponents/signalBarsHight';
import { SignalBarsLow } from './components/IconsComponents/signalBarsLow';
import { SignalBarsMiddle } from './components/IconsComponents/signalBarsMiddle';

export function levelIcon(level) {
	if (level == 'Baixa') {
		return <SignalBarsLow />;
	} else if (level == 'Média') {
		return <SignalBarsMiddle />;
	} else if (level == 'Alta') {
		return <SignalBarsHight />;
	}
}

export function formatDate(dateToFormat) {
	const date = new Date(dateToFormat);
	return `${date.getUTCDate()}/${date.getUTCMonth() + 1}/${date.getFullYear()}`;
}
