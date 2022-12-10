def save_component0(request_data):
		adressat = request_data['adressat']
		stand = request_data['stand']
		try:
			datensatz = request_data['datensatz']
		except KeyError:
			datensatz = ''
		zeitraum_von = request_data['zeitraum_von']
		zeitraum_bis = request_data['zeitraum_bis']
		messungsintervall = request_data['messungsintervall']
		eintraege = request_data['eintraege']
		specifics = {
			"component" : request_data['template'],
			"headline" : request_data['headline'],
			"adressat" : adressat,
			"stand" : stand,
			"datensatz" : datensatz,
			"zeitraum_von" : zeitraum_von,
			"zeitraum_bis" : zeitraum_bis,
			"messungsintervall" : messungsintervall,
			"eintraege:": eintraege
		}
		return specifics

def save_component1(request_data):

    if request_data['phase'] == 1:
        return request_data['answers']

    specifics = {
			"component" : request_data['template'],
			"headline" : request_data['headline'],
			"questions" : request_data['questions'],
			"answers" : request_data['answers'],
			"images" : request_data['images']
		}
    return specifics

def save_component2(request_data):
    if request_data['phase'] == '1':
        return request_data['answers']

    specifics = {
			"component" : request_data['template'],
			"headline" : request_data['headline'],
			"questions" : request_data['questions'],
			"answers" : request_data['answers']
			#"images" : request_data['images']
		}
    return specifics