
class JsonFile
  def run
    file = File.read("TiplocPublicExport_2022-12-24_10-37.json")

    data_hash = JSON.parse(file)

    data_hash["Tiplocs"].find do |loc|
      loc["Stanox"] == 51531
    end
  end
end
