from dashing.widgets import Widget

class Sample(Widget):
    def get_context(self):
        return{
            'detail': 'A tak dodajemy skrypt pythona',
            'moreInfo': 'pamietaj o ustawieniu linka w url',
        }