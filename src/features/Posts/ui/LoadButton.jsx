import Button from '../../../shared/ui/button'

export default function LoadButton({onClick, isLoading}){
    return (
    <Button
        functionButton={onClick}
        disabled={isLoading}
        textButton={isLoading ? 'Загрузка...' : 'Загрузить еще'}
    />
    )
}